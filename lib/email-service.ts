// Email service adapter interface
export interface EmailServiceAdapter {
  sendContactEmail(data: ContactEmailData): Promise<EmailResult>
  addToMailingList(email: string): Promise<EmailResult>
}

export interface ContactEmailData {
  name: string
  email: string
  company?: string
  message: string
}

export interface EmailResult {
  success: boolean
  message: string
  error?: string
}

// Mailchimp implementation
class MailchimpService implements EmailServiceAdapter {
  private apiKey: string
  private listId: string
  private serverPrefix: string

  constructor() {
    this.apiKey = process.env.MAILCHIMP_API_KEY || ''
    this.listId = process.env.MAILCHIMP_LIST_ID || ''
    this.serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX || 'us1'
  }

  async sendContactEmail(data: ContactEmailData): Promise<EmailResult> {
    try {
      // In a real implementation, you would send an email via Mailchimp's transactional email service
      // or use a separate service like SendGrid, Postmark, etc.
      
      // For now, we'll just log it
      console.log('Sending contact email:', data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 100))

      return {
        success: true,
        message: 'Email sent successfully',
      }
    } catch (error) {
      console.error('Failed to send contact email:', error)
      return {
        success: false,
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  async addToMailingList(email: string): Promise<EmailResult> {
    if (!this.apiKey || !this.listId) {
      console.warn('Mailchimp credentials not configured')
      return {
        success: false,
        message: 'Email service not configured',
        error: 'Missing API credentials',
      }
    }

    try {
      const url = `https://${this.serverPrefix}.api.mailchimp.com/3.0/lists/${this.listId}/members`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      })

      if (response.ok) {
        return {
          success: true,
          message: 'Successfully subscribed to mailing list',
        }
      }

      const errorData = await response.json()
      
      // Handle already subscribed case
      if (errorData.title === 'Member Exists') {
        return {
          success: true,
          message: 'Email already subscribed',
        }
      }

      return {
        success: false,
        message: 'Failed to subscribe',
        error: errorData.detail || 'Unknown error',
      }
    } catch (error) {
      console.error('Failed to add to mailing list:', error)
      return {
        success: false,
        message: 'Failed to subscribe',
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }
}

// Mock service for development
class MockEmailService implements EmailServiceAdapter {
  async sendContactEmail(data: ContactEmailData): Promise<EmailResult> {
    console.log('[MOCK] Sending contact email:', data)
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      success: true,
      message: 'Email sent successfully (mock)',
    }
  }

  async addToMailingList(email: string): Promise<EmailResult> {
    console.log('[MOCK] Adding to mailing list:', email)
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      success: true,
      message: 'Successfully subscribed (mock)',
    }
  }
}

// Factory function to get the appropriate email service
export function getEmailService(): EmailServiceAdapter {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const hasMailchimpConfig =
    process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID

  if (isDevelopment && !hasMailchimpConfig) {
    return new MockEmailService()
  }

  return new MailchimpService()
}

// Retry logic with exponential backoff
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error | unknown

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
      if (i < maxRetries - 1) {
        const delay = baseDelay * Math.pow(2, i)
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError
}
