import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, ShieldCheck, Target, Users } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Regulated and governance-led',
    text: 'SEBI-registered setup with documented risk controls, transparent reporting, and process-first oversight.',
  },
  {
    icon: BarChart3,
    title: 'Research-driven investing',
    text: 'Bottom-up research and disciplined framework designed for long-term compounding over market noise.',
  },
  {
    icon: Target,
    title: 'Mandate clarity',
    text: 'We focus on suitability, capital allocation discipline, and clear communication before any product decision.',
  },
  {
    icon: Users,
    title: 'Aligned partnership model',
    text: 'Built for family offices, UHNIs, and serious long-horizon investors who value consistency and transparency.',
  },
]

export default function WhyUs() {
  return (
    <>
      <SEO
        title="Why us"
        description="Why investors choose Metaarth Capital — governance, disciplined research, and long-term investment alignment."
        path="/why-us"
      />

      <PageHero
        eyebrow="Why us"
        title="Why"
        titleHighlight="choose us"
        description="A disciplined, research-led approach with governance standards designed for sophisticated investors and long-horizon outcomes."
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Investment team reviewing data and strategy in a conference room"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Book consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/aif">Explore AIF</Link>
          </Button>
        </div>
      </PageHero>

      <section className="border-y border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl">
              What differentiates us
            </h2>
            <p className="mt-3 text-muted dark:text-stone-400">
              Our framework is built for accountability, consistency, and investor trust.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-stone-200/90 bg-white/95 p-7 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
                >
                  <Icon className="size-9 text-accent dark:text-accent-bright" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">{reason.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Evaluate fit with confidence"
        subtitle="If our investment discipline and governance approach align with your expectations, we’d be glad to connect."
        primaryLabel="Talk to us"
        secondaryLabel="Partner with us"
        secondaryHref="/partner-with-us"
      />
    </>
  )
}
