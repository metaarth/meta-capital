import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import { BRAND_IMG } from '@/data/brandImagery'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Metaarth Capital, Lucknow office, phone, and message form. Book a consultation or send a message."
        path="/contact"
      />

      <PageHero
        eyebrow="Reach us"
        title="Let’s"
        titleHighlight="talk"
        description="Share a few details and we’ll respond during business hours. For urgent regulatory matters, use official channels listed in offer documents."
        imageSrc={BRAND_IMG.advisor}
        imageAlt="Advisor speaking with a client"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <p className="rounded-lg bg-accent/10 px-4 py-6 text-sm text-navy dark:bg-accent-bright/10 dark:text-slate-200">
                    Thank you, this is a demo form. Connect via phone or email
                    below for a real inquiry.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-navy dark:text-slate-200">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-navy outline-none ring-accent/20 focus:ring-2 dark:border-slate-600 dark:bg-navy-light dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-navy dark:text-slate-200">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-navy outline-none ring-accent/20 focus:ring-2 dark:border-slate-600 dark:bg-navy-light dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-navy dark:text-slate-200">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-navy outline-none ring-accent/20 focus:ring-2 dark:border-slate-600 dark:bg-navy-light dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-navy dark:text-slate-200">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="mt-1.5 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-navy outline-none ring-accent/20 focus:ring-2 dark:border-slate-600 dark:bg-navy-light dark:text-white"
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2 sm:w-auto">
                      <Send className="size-4" />
                      Submit
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Office</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted dark:text-slate-400">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent dark:text-accent-bright" />
                  <span>
                    Metaarth Capital Office Space No. Part 8 and 9, Saran
                    Chamber- 2, Lucknow- 226001
                  </span>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent dark:text-accent-bright" />
                  <span>
                    <a href="tel:+919839906754" className="text-navy hover:underline dark:text-white">
                      +91 98399 06754
                    </a>
                    <span className="mx-2">·</span>
                    <a href="tel:+918299559257" className="text-navy hover:underline dark:text-white">
                      +91 82995 59257
                    </a>
                  </span>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent dark:text-accent-bright" />
                  <a
                    href="mailto:info@metaarth.com"
                    className="text-navy hover:underline dark:text-white"
                  >
                    info@metaarth.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
              <iframe
                title="Metaarth Capital office location map"
                className="aspect-16/10 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Metaarth%20Capital%20Office%20Space%20No.%20Part%208%20and%209%2C%20Saran%20Chamber-%202%2C%20Lucknow-%20226001&z=16&output=embed"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
