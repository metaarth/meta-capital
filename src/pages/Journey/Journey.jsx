import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck, Coffee, Rocket, UserPlus } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import { BRAND_IMG } from '@/data/brandImagery'

const STEPS = [
  {
    icon: Coffee,
    title: 'Introductory conversation',
    text: 'We learn what you’re optimizing for, liquidity, legacy, risk tolerance, and what keeps you up at night.',
    color: 'from-accent to-brand-scarlet',
  },
  {
    icon: ClipboardCheck,
    title: 'Fit & documentation',
    text: 'Suitability checks, KYC, and clear written scope. No product until the plan makes sense on paper.',
    color: 'from-brand-scarlet to-accent-bright',
  },
  {
    icon: UserPlus,
    title: 'Onboarding',
    text: 'Account setup, mandate alignment, and communication preferences, including how often you want to hear from us.',
    color: 'from-accent-bright to-gold',
  },
  {
    icon: Rocket,
    title: 'Invest & review',
    text: 'Execution follows the plan; reviews are scheduled, not accidental. Life changes trigger updates, not panic.',
    color: 'from-gold to-accent',
  },
]

export default function Journey() {
  return (
    <>
      <SEO
        title="Investor journey"
        description="Your journey with Metaarth Capital, from first conversation to onboarding, investment, and ongoing partnership."
        path="/journey"
      />

      <PageHero
        eyebrow="Your path"
        title="A journey built"
        titleHighlight="around you"
        description="From the first coffee conversation to years of reviews, we map a clear path so you always know what happens next."
        imageSrc={BRAND_IMG.planning}
        imageAlt="Family planning finances together at home"
      >
        <Button asChild className="mt-8 gap-2">
          <Link to="/contact">
            Start the conversation
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="steps-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            id="steps-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
          >
            Four stages{' '}
            <span className="text-gradient-brand">one partnership</span>
          </motion.h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {STEPS.map((step, i) => {
              const StepIcon = step.icon
              return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-stone-200/90 bg-white/95 p-8 shadow-[var(--shadow-card)] dark:border-stone-700 dark:bg-white/[0.05]"
              >
                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${step.color}`}
                  aria-hidden
                />
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-bright/20 text-accent dark:text-accent-bright">
                  <StepIcon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
                  {step.text}
                </p>
              </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
                Humans, not portals
              </h2>
              <p className="mt-4 leading-relaxed text-muted dark:text-stone-400">
                You’ll have named contacts who know your file, not only a ticket
                system. Technology supports us; it doesn’t replace the relationship.
              </p>
              <Button asChild variant="outline" className="mt-8">
                <Link to="/blog">Read insights</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src={BRAND_IMG.team}
                alt="Team collaborating in the office"
                className="rounded-3xl border-4 border-white shadow-[var(--shadow-yellow)] ring-2 ring-accent/15 dark:border-stone-800"
                width={900}
                height={675}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for the next step?"
        subtitle="Tell us where you are today, we’ll suggest a sensible path forward."
      />
    </>
  )
}
