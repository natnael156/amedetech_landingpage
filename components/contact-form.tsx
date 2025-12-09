'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { AnimationWrapper } from './animation-wrapper'
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation'
import { trackFormSubmit, trackSectionView } from '@/lib/analytics'
import { useEffect } from 'react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const { ref, isInView } = useScrollAnimation()

  useEffect(() => {
    if (isInView) {
      trackSectionView('contact')
    }
  }, [isInView])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Using Formspree - replace with your Formspree form ID
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORMSPREE_ID'
      
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || 'Not provided',
          message: data.message,
          _replyto: data.email,
          _subject: `New Contact Form Submission from ${data.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.',
        })
        trackFormSubmit('contact_form')
        reset()
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.',
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Connection failed. Please check your internet and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm text-cyan-300 font-medium">Let's Connect</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let&apos;s discuss how we can help
              you achieve your goals.
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="slideUp" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {/* Glassmorphism Card */}
            <div className="relative group">
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition duration-500" />
              
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20"
              >
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                {...register('honeypot')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Two Column Layout for Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-cyan-300 mb-2"
                  >
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-cyan-300 mb-2"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Field */}
              <div className="mb-6 relative">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-cyan-300 mb-2"
                >
                  Company <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    id="company"
                    type="text"
                    {...register('company')}
                    className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                    placeholder="Your Company Name"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
                </div>
                {errors.company && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-6 relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-cyan-300 mb-2"
                >
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none backdrop-blur-sm"
                    placeholder="Tell us about your project and how we can help..."
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Status Messages */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-xl border backdrop-blur-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 border-green-500/30 text-green-300'
                      : 'bg-red-500/10 border-red-500/30 text-red-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed overflow-hidden"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
