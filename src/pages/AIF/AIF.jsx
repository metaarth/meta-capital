import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Landmark,
  Shield,
  Users,
} from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import AIFPerformanceComparison from '@/components/sections/AIFPerformanceComparison'
import CTASection from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'

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

const FUND_SNAPSHOT = [
  { label: 'Investment manager', value: 'Metaarth Investments Private Limited' },
  { label: 'Fund name', value: 'Metaarth Growth Fund-I' },
  { label: 'Category', value: 'SEBI AIF Category III' },
  { label: 'Structure', value: 'Close-ended' },
  { label: 'SEBI registration', value: 'IN/A1F3/24-25/1761' },
  { label: 'Trustee', value: 'Vistra ITCL' },
]

const GARP_CHECKLIST = [
  'Sustainable growth above 15%',
  'PEG below 1.5',
  'ROE above 18%',
  'Debt/Equity below 0.5',
  'Promoter skin in the game',
]

const GOVERNANCE_POINTS = [
  'Transparent reporting cadence',
  'Independent trustee oversight',
  'Independent audits and controls',
  'Defined contributor rights and governance',
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
        title="Alternative "
        titleHighlight="Investment Funds"
        description="A Category III AIF offering for qualified investors seeking a regulated, research-driven equity mandate, with the transparency and rigour you expect from an institutional partner."
        imageSrc="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Trader workspace with multi-screen market analytics and portfolio data"
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
          <Button asChild variant="outline">
            <a href="/Metaarth%20Capital.pdf" download>
              Download brochure (PDF)
            </a>
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
                className="rounded-2xl border-l-4 border-accent bg-white/95 p-8 shadow-sm dark:border-accent-bright dark:bg-white/5"
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
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            alt="Finance professionals reviewing investment reports in an office meeting"
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

      <section className="border-b border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl">
              Fund snapshot
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted dark:text-stone-400">
              Core details from the product note, presented in one place for faster evaluation.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FUND_SNAPSHOT.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-stone-500">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-navy dark:text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-stone-200/90 bg-white/95 p-7 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <BarChart3 className="size-7 text-accent dark:text-accent-bright" />
              <h3 className="font-display text-xl font-semibold text-navy dark:text-white">
                GARP checklist used in screening
              </h3>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted dark:text-stone-400">
              {GARP_CHECKLIST.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-accent dark:bg-accent-bright" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-stone-200/90 bg-white/95 p-7 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="size-7 text-accent dark:text-accent-bright" />
              <h3 className="font-display text-xl font-semibold text-navy dark:text-white">
                Portfolio construction discipline
              </h3>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted dark:text-stone-400">
              <li>20-25 high-conviction stocks</li>
              <li>Sector allocation capped at 25%</li>
              <li>Individual stock weight capped at 8%</li>
              <li>Quarterly monitoring with valuation and earnings review</li>
              <li>Exit triggers include valuation stretch, growth slowdown, and governance red flags</li>
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="border-b border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-stone-200/90 bg-white/95 p-7 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <Users className="size-7 text-accent dark:text-accent-bright" />
                <h3 className="font-display text-xl font-semibold text-navy dark:text-white">
                  Leadership profiles
                </h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-muted dark:text-stone-400">
                <p>
                  <span className="font-semibold text-navy dark:text-white">Nipun Madan</span> — Fund Manager
                  profile with 15+ years of market experience in equity research and fund management.
                </p>
                <p>
                  <span className="font-semibold text-navy dark:text-white">Amrishnath Tiwari</span> — Founder
                  profile with 20+ years in finance and investments.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl border border-stone-200/90 bg-white/95 p-7 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <BadgeCheck className="size-7 text-accent dark:text-accent-bright" />
                <h3 className="font-display text-xl font-semibold text-navy dark:text-white">
                  Governance checkpoints
                </h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted dark:text-stone-400">
                {GOVERNANCE_POINTS.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-accent dark:bg-accent-bright" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted dark:text-stone-500">
                For complete legal terms (fees, contribution agreement, and rights), refer to official offer and
                contribution documents shared during onboarding.
              </p>
            </motion.article>
          </div>
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
