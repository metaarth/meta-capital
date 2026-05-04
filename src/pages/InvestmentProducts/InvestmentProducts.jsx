import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Layers, LineChart, PieChart } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import { Button } from '@/components/ui/button'
import SipCalculator from '@/components/sections/SipCalculator'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import { BRAND_IMG } from '@/data/brandImagery'

const PRODUCTS = [
  {
    id: 'equity',
    icon: LineChart,
    title: 'Equity funds',
    description:
      'Growth-oriented mutual funds investing primarily in listed equities. Suitable for long horizons and investors who can tolerate market volatility.',
    points: [
      'Long-term wealth accumulation sleeve',
      'Category fit depends on risk profile',
      'Past performance does not guarantee future results',
    ],
  },
  {
    id: 'debt',
    icon: PieChart,
    title: 'Debt funds',
    description:
      'Fixed-income oriented funds focusing on interest income and relative stability. Often used for shorter horizons or ballast in a portfolio.',
    points: [
      'Duration and credit profile vary by scheme',
      'Not risk-free — rate and credit risks apply',
      'Match horizon to portfolio maturity profile',
    ],
  },
  {
    id: 'hybrid',
    icon: Layers,
    title: 'Hybrid funds',
    description:
      'Blend of equity and debt in predefined proportions — useful when you want a single mandate with built-in rebalancing.',
    points: [
      'Allocation ranges defined in scheme documents',
      'Can moderate equity swings vs pure equity',
      'Read SID / SAI before investing',
    ],
  },
]

export default function InvestmentProducts() {
  return (
    <>
      <SEO
        title="Investment products"
        description="Explore equity, debt, and hybrid mutual fund building blocks — plus an illustrative SIP calculator. Metaarth Capital."
        path="/investment-products"
      />

      <PageHero
        eyebrow="Building blocks"
        title="Investment"
        titleHighlight="products"
        description="Funds and sleeves we use when constructing portfolios — always scheme-specific, always subject to suitability. Same visual language as the rest of the site: clarity first."
        imageSrc={BRAND_IMG.charts}
        imageAlt="Market charts and data — illustrative"
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

        <motion.div
          className="mt-20 overflow-hidden rounded-3xl border-2 border-accent-bright/25 bg-section-mesh p-8 dark:border-accent-bright/20 sm:p-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center">
            <img
              src={BRAND_IMG.planning}
              alt="Family financial planning"
              className="h-36 w-full max-w-xs rounded-2xl object-cover shadow-md ring-2 ring-accent/15"
              width={320}
              height={240}
              loading="lazy"
            />
            <p className="text-center text-sm leading-relaxed text-muted dark:text-stone-400 sm:text-left">
              SIPs work best when they mirror real cash flows — not a generic
              default. Use the calculator as a conversation starter with your
              advisor.
            </p>
          </div>
          <h2 className="text-center font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
            Plan your SIP
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted dark:text-slate-400">
            Adjust sliders to see an illustrative corpus. This is not investment
            advice or a forecast.
          </p>
          <div className="mx-auto mt-10 max-w-4xl">
            <SipCalculator />
          </div>
        </motion.div>
      </div>

      <CTASection />
    </>
  )
}
