import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, Landmark, Shield, Users } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import AIFPerformanceComparison from '@/components/sections/AIFPerformanceComparison'
import CTASection from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import { BRAND_IMG } from '@/data/brandImagery'

const HIGHLIGHTS = [
  {
    icon: Landmark,
    title: 'Category III AIF',
    text: 'Alternative Investment Fund structure for sophisticated investors, subject to SEBI regulations and offer-document terms.',
  },
  {
    icon: Building2,
    title: 'Long-only discipline',
    text: 'Equity-oriented, bottom-up approach aligned to mandate, no promises of outcomes, full emphasis on process.',
  },
  {
    icon: Users,
    title: 'UHNI & family offices',
    text: 'Designed for investors who need institutional-grade governance with direct access to decision-makers.',
  },
  {
    icon: Shield,
    title: 'Risk & compliance',
    text: 'Documented risk framework, oversight, and reporting cadence appropriate for regulated vehicles.',
  },
]

export default function AIF() {
  return (
    <>
      <SEO
        title="Alternative Investment Fund (AIF)"
        description="Metaarth Capital SEBI-registered Category III AIF, long-only equity approach for Ultra-HNIs and family offices. Information only; read offer documents."
        path="/aif"
      />

      <PageHero
        eyebrow="Product"
        title="Alternative Investment"
        titleHighlight="Fund"
        description="A Category III AIF offering for qualified investors seeking a regulated, research-driven equity mandate, with the transparency and rigour you expect from an institutional partner."
        imageSrc="https://images.unsplash.com/photo-1623151830198-5c3c0a2cf2f4?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Capital allocation concept with Indian currency notes"
      >
        <p className="mt-4 text-sm font-medium text-accent dark:text-accent-bright">
          Information only, not an offer. Suitability and eligibility apply.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Discuss eligibility</Link>
          </Button>
          <Button asChild variant="accent">
            <Link to="/investment-philosophy">Our philosophy</Link>
          </Button>
        </div>
      </PageHero>

      <AIFPerformanceComparison />

      <section
        className="border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="aif-highlights"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            id="aif-highlights"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-3xl font-bold text-navy dark:text-white"
          >
            At a glance
          </motion.h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon
              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border-l-4 border-accent bg-white/95 p-8 shadow-sm dark:border-accent-bright dark:bg-white/[0.05]"
              >
                <Icon className="size-9 text-accent dark:text-accent-bright" />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
                  {item.text}
                </p>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={BRAND_IMG.handshake}
            alt="Professional handshake, partnership and trust"
            className="rounded-3xl border-2 border-accent-bright/30 object-cover shadow-lg"
            width={800}
            height={560}
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
              Next steps
            </h2>
            <p className="mt-4 leading-relaxed text-muted dark:text-stone-400">
              If you are evaluating an AIF, start with eligibility, minimums, fees,
              lock-in, and risk factors in the offer document. Our team can walk
              you through each section and answer questions, without pressure to
              commit.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted dark:text-stone-400">
              <li>Verify registration details on SEBI / official disclosures</li>
              <li>Match liquidity and horizon to your personal balance sheet</li>
              <li>Involve your tax and legal advisors where appropriate</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Explore AIF fit"
        subtitle="We’ll help you understand the mandate before you decide."
        primaryLabel="Contact us"
        secondaryLabel="Performance & reporting"
        secondaryHref="/performance"
      />
    </>
  )
}
