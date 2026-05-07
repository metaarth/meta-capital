import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AlertTriangle, FileText, Landmark, Layers3, LineChart, Wallet } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import { BRAND_IMG } from '@/data/brandImagery'

export default function Performance() {
  return (
    <>
      <SEO
        title="Performance"
        description="Performance reporting and disclosures at Metaarth Capital, read scheme documents; past performance is not indicative of future results."
        path="/performance"
      />

      <PageHero
        eyebrow="Reporting"
        title="Clarity on"
        titleHighlight="outcomes"
        titleRest=" with honest limits"
        description="We believe sophisticated investors deserve clear reporting and conservative language. Markets are uncertain; labels like ‘outperformance’ should be earned in context, not marketing."
        imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Financial growth chart on a market screen"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="accent" size="sm">
            <Link to="/contact">Request information</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/aif">AIF details</Link>
          </Button>
        </div>
      </PageHero>

      <section className="border-y border-stone-200/60 bg-section-mesh py-12 dark:border-stone-800">
        <div className="mx-auto flex max-w-4xl gap-4 px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="mt-1 size-8 shrink-0 text-accent" aria-hidden />
          <div>
            <h2 className="font-display text-lg font-bold text-navy dark:text-white">
              Important disclaimer
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
              Mutual fund and AIF investments are subject to market risks. Past
              performance is not indicative of future results. Read all
              scheme-related documents carefully. This page does not display live
              performance data, request official factsheets and disclosures from
              our team or through prescribed regulatory channels.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
              AIF essentials at a glance
            </h2>
            <p className="mt-3 text-muted dark:text-stone-400">
              Helpful context before you evaluate any Category III strategy.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Wallet,
                title: 'Minimum ticket',
                text: 'AIF investments are typically positioned for HNIs/UHNIs, with a common minimum commitment of Rs. 1 crore.',
              },
              {
                icon: Landmark,
                title: 'Regulatory framework',
                text: 'AIFs are regulated by SEBI under the Alternative Investment Funds Regulations, 2012.',
              },
              {
                icon: Layers3,
                title: 'Three broad categories',
                text: 'AIFs are commonly classified into Category I, II, and III based on mandate and permissible strategies.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
                >
                  <Icon className="size-8 text-accent dark:text-accent-bright" strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
                    {item.text}
                  </p>
                </motion.article>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200/90 bg-white/90 p-5 text-sm text-muted dark:border-stone-700 dark:bg-white/4 dark:text-stone-400">
            <p>
              Practical note: in many structures, a demat account may not be mandatory for onboarding, and some
              funds permit NRI participation subject to scheme terms, KYC, FEMA/tax requirements, and manager
              eligibility checks.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="reporting-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                id="reporting-heading"
                className="font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl"
              >
                What reporting should answer
              </h2>
              <ul className="mt-6 space-y-4 text-muted dark:text-stone-400">
                {[
                  'What you own, and why it fits the mandate we agreed',
                  'How risk evolved versus your comfort band',
                  'Costs, liquidity, and tax-relevant events in plain terms',
                  'What changed since the last review, and what did not',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <LineChart className="mt-0.5 size-5 shrink-0 text-accent-bright" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border-2 border-accent/20 shadow-(--shadow-card)"
            >
              <img
                src={BRAND_IMG.advisor}
                alt="Advisor walking a client through portfolio reporting"
                className="aspect-4/3 w-full object-cover"
                width={800}
                height={600}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-red-900/50 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm font-medium text-white drop-shadow-md">
                We prefer a conversation around numbers, not a PDF you file away
                unread.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800"
        aria-labelledby="docs-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FileText className="mx-auto size-12 text-accent" strokeWidth={1.25} />
          <h2
            id="docs-heading"
            className="mt-4 font-display text-2xl font-bold text-navy dark:text-white"
          >
            Official documents
          </h2>
          <p className="mt-3 text-muted dark:text-stone-400">
            Scheme Information Documents (SID), Statement of Additional Information
            (SAI), and offer documents are the authoritative source for terms,
            risks, and fees. We help you navigate them, we do not replace them.
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact">Ask for document access</Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  )
}
