import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Scale, Search, Target } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import { BRAND_IMG } from '@/data/brandImagery'

const PILLARS = [
  {
    icon: Search,
    title: 'Bottom-up research',
    text: 'We build conviction company by company — reading filings, stress-testing assumptions, and debating theses as a team.',
  },
  {
    icon: Target,
    title: 'GARP at the core',
    text: 'Growth at reasonable prices: we care as much about what we pay as what we might earn over a full cycle.',
  },
  {
    icon: Scale,
    title: 'Risk before return',
    text: 'Position sizing, liquidity, and governance matter. No single idea should put your plan at risk.',
  },
  {
    icon: BookOpen,
    title: 'Transparency',
    text: 'You should understand why you own what you own — in plain language, with documentation you can revisit.',
  },
]

export default function InvestmentPhilosophy() {
  return (
    <>
      <SEO
        title="Investment philosophy"
        description="Metaarth Capital investment philosophy — GARP, bottom-up research, risk-aware portfolio construction for sophisticated investors."
        path="/investment-philosophy"
      />

      <PageHero
        eyebrow="How we think"
        title="Discipline,"
        titleHighlight="not drama"
        description="Our philosophy is built for long horizons: research-driven stock selection, sensible valuations, and processes that survive bad days — not just good headlines."
        imageSrc={BRAND_IMG.focus}
        imageAlt="Professionals reviewing investment research and documents together"
      >
        <blockquote className="mt-8 border-l-4 border-accent-bright pl-4 text-sm italic leading-relaxed text-stone-600 dark:text-stone-400">
          “Price is what you pay. Value is what you get.” — Warren Buffett
        </blockquote>
      </PageHero>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="pillars-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            id="pillars-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
          >
            What guides <span className="text-accent">every</span>{' '}
            <span className="text-accent-bright dark:text-gold">decision</span>
          </motion.h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => {
              const PillarIcon = pillar.icon
              return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border-2 border-stone-200/80 bg-white/90 p-8 shadow-[var(--shadow-card)] dark:border-stone-700 dark:bg-white/[0.05]"
              >
                <PillarIcon className="size-10 text-accent dark:text-accent-bright" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
                  {pillar.text}
                </p>
              </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="human-philosophy">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl ring-2 ring-accent/20"
          >
            <img
              src={BRAND_IMG.meeting}
              alt="Team discussion around investment strategy"
              className="aspect-[4/3] w-full object-cover"
              width={800}
              height={600}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              id="human-philosophy"
              className="font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl"
            >
              Conviction is collaborative
            </h2>
            <p className="mt-4 leading-relaxed text-muted dark:text-stone-400">
              The best ideas survive challenge. Our research culture encourages
              dissent, second opinions, and updating views when facts change —
              without abandoning a documented process.
            </p>
            <Button asChild className="mt-8">
              <Link to="/performance">See how we report</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Align philosophy with your plan"
        subtitle="A short conversation can clarify whether our approach fits your goals and constraints."
        primaryLabel="Book consultation"
        secondaryLabel="About us"
        secondaryHref="/about"
      />
    </>
  )
}
