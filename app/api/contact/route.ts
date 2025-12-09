import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit'
import type { ContactResponse } from '@/types'

export async function POST(request: NextRequest) {
  try {
    // Get client identifier for rate limiting
    const clientId = getClientIdentifier(request)

    // Apply rate limiting
    const rateLimitResult = rateLimit(clientId, {
      maxRequests: 5,
      windowMs: 60000, // 1 minute
    })

    if (!rateLimitResult.allowed) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          message: 'Too many requests',
          error: 'Please wait before submitting again',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          },
        }
      )
    }

    // Parse request body
    const body = await request.json()

    // Check honeypot field (bot detection)
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Log suspicious activity
      console.warn('Bot detected - honeypot field filled:', {
        clientId,
        timestamp: new Date().toISOString(),
        honeypot: body.honeypot,
      })

      // Return success to bot (don't reveal detection)
      return NextResponse.json<ContactResponse>({
        success: true,
        message: 'Thank you for your message!',
      })
    }

    // Validate request data
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          message: 'Validation failed',
          error: validationResult.error.errors[0].message,
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Log the submission (in production, send to email service)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      timestamp: new Date().toISOString(),
      clientId,
    })

    // TODO: Integrate with email service (Mailchimp, SendGrid, etc.)
    // Example:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact form submission from ${data.name}`,
    //   body: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Company: ${data.company || 'N/A'}
    //     Message: ${data.message}
    //   `,
    // })

    return NextResponse.json<ContactResponse>(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      },
      {
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
        },
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    // Log error for monitoring
    console.error('Contact form submission error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json<ContactResponse>(
      {
        success: false,
        message: 'Internal server error',
        error: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    )
  }
}
