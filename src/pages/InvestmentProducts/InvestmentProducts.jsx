import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Layers, LineChart, PieChart } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import { Button } from '@/components/ui/button'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import { BRAND_IMG } from '@/data/brandImagery'

const PRODUCTS = [
  {
    id: 'category-i',
    icon: LineChart,
    title: 'Category I AIF',
    description:
      'Includes AIF strategies investing in start-ups, early-stage ventures, SMEs, and other sectors considered socially or economically desirable.',
    points: [
      'Typically long-horizon and theme-led exposure',
      'May include angel and venture style mandates',
      'Structure and lock-in vary by specific fund documents',
    ],
  },
  {
    id: 'category-ii',
    icon: PieChart,
    title: 'Category II AIF',
    description:
      'Primarily includes private equity and debt-oriented AIF structures that do not undertake leverage beyond day-to-day operational requirements.',
    points: [
      'Often used for structured growth or credit opportunities',
      'Due diligence on manager process remains essential',
      'Liquidity profile is strategy and document specific',
    ],
  },
  {
    id: 'category-iii',
    icon: Layers,
    title: 'Category III AIF',
    description:
      'Employs market-linked strategies, including listed equities and tactical positioning, under a clearly defined risk and governance framework.',
    points: [
      'Can use diverse market strategies within regulations',
      'Requires clear drawdown and volatility expectations',
      'Review risk controls and reporting discipline upfront',
    ],
  },
]

export default function InvestmentProducts() {
  return (
    <>
      <SEO
        title="AIF categories"
        description="Explore Category I, II, and III AIF structures with suitability-focused guidance from Metaarth Capital."
        path="/investment-products"
      />

      <PageHero
        eyebrow="Building blocks"
        title="Alternative Investment"
        titleHighlight="Fund categories"
        description="AIF categories used by sophisticated investors, always mandate-specific and always subject to suitability, disclosures, and risk appetite."
        imageSrc={BRAND_IMG.charts}
        imageAlt="AIF market charts and analytics"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          {PRODUCTS.map((p, i) => {
            const ProductIcon = p.icon
            return (
            <motion.section
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              aria-labelledby={`product-${p.id}-title`}
              className="rounded-2xl border-2 border-stone-200/80 bg-white/80 p-8 shadow-[var(--shadow-card)] backdrop-blur-md dark:border-stone-700/60 dark:bg-white/[0.06] sm:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent dark:bg-accent-bright/10 dark:text-accent-bright">
                  <ProductIcon className="size-7" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h2
                    id={`product-${p.id}-title`}
                    className="font-display text-2xl font-bold text-navy dark:text-white"
                  >
                    {p.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted dark:text-slate-400">
                    {p.description}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-navy dark:text-slate-300">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="text-accent dark:text-accent-bright">·</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-8">
                    <Link to="/contact">Ask about suitability</Link>
                  </Button>
                </div>
              </div>
            </motion.section>
            )
          })}
        </div>

        <motion.section
          className="mt-20 overflow-hidden rounded-3xl border-2 border-accent-bright/25 bg-section-mesh p-8 dark:border-accent-bright/20 sm:p-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center">
            <img
              src={BRAND_IMG.planning}
              alt="AIF portfolio planning discussion"
              className="h-36 w-full max-w-xs rounded-2xl object-cover shadow-md ring-2 ring-accent/15"
              width={320}
              height={240}
              loading="lazy"
            />
            <p className="text-center text-sm leading-relaxed text-muted dark:text-stone-400 sm:text-left">
              AIF allocation decisions should begin with mandate clarity, liquidity expectations,
              and drawdown comfort, not return chasing.
            </p>
          </div>
          <h2 className="text-center font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
            AIF evaluation checklist
          </h2>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-3 text-sm text-navy dark:text-slate-200 sm:grid-cols-2">
            <li className="rounded-xl bg-white/80 px-4 py-3 dark:bg-white/[0.05]">Review fund category and mandate scope</li>
            <li className="rounded-xl bg-white/80 px-4 py-3 dark:bg-white/[0.05]">Understand minimum investment and tenure</li>
            <li className="rounded-xl bg-white/80 px-4 py-3 dark:bg-white/[0.05]">Check fee structure and reporting cadence</li>
            <li className="rounded-xl bg-white/80 px-4 py-3 dark:bg-white/[0.05]">Assess risk controls and governance standards</li>
          </ul>
        </motion.section>
      </div>

      <CTASection />
    </>
  )
}
