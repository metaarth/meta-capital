import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  CheckCircle2,
  Target,
  TrendingUp,
  Shield,
} from 'lucide-react'
import SEO from '@/components/seo/SEO'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import { BRAND_IMG } from '@/data/brandImagery'

const SERVICES = [
  {
    id: 'aif-mandate',
    icon: BarChart3,
    title: 'AIF mandate design',
    description:
      'Category III AIF mandate setup with disciplined universe selection, position sizing bands, and governance-first portfolio construction.',
    benefits: [
      'Bottom-up research framework',
      'Portfolio concentration guardrails',
      'Documented investment committee process',
    ],
  },
  {
    id: 'eligibility',
    icon: Target,
    title: 'AIF eligibility guidance',
    description:
      'Structured onboarding support covering investor qualification, minimum commitment, and operational readiness before allocation.',
    benefits: [
      'Clear minimum ticket explanation',
      'Suitability and horizon alignment checks',
      'Transparent onboarding documentation',
    ],
  },
  {
    id: 'risk-governance',
    icon: Shield,
    title: 'Risk & governance framework',
    description:
      'Risk controls and governance standards designed for sophisticated investors who require discipline during volatile cycles.',
    benefits: [
      'Drawdown-aware risk budgeting',
      'Periodic exposure and concentration reviews',
      'Escalation protocol for mandate drift',
    ],
  },
  {
    id: 'reporting',
    icon: TrendingUp,
    title: 'Performance & reporting',
    description:
      'Institutional-style reporting with performance attribution, benchmark context, and consistent disclosure cadence.',
    benefits: [
      'Periodic investor updates',
      'Clear attribution and risk commentary',
      'Review meetings with decision transparency',
    ],
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="AIF mandate design, eligibility support, risk governance, and reporting services from Metaarth Capital."
        path="/services"
      />

      <PageHero
        eyebrow="Capabilities"
        title="Services built for"
        titleHighlight="real portfolios"
        description="Clear scopes, professional tone, and no unrealistic promises. We focus on process, suitability, and long-term alignment, the same craft we apply on the home page, page by page."
        imageSrc={BRAND_IMG.advisor}
        imageAlt="Advisor supporting a client with financial planning"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-20">
          {SERVICES.map((s) => {
            const ServiceIcon = s.icon
            return (
            <motion.article
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
              className="scroll-mt-28"
              aria-labelledby={`${s.id}-title`}
            >
              <Card className="overflow-hidden border-2 border-stone-200/80 dark:border-stone-700">
                <div className="grid lg:grid-cols-5">
                  <div className="flex flex-col justify-center border-b border-stone-200/90 bg-section-mesh p-8 dark:border-stone-800 lg:col-span-2 lg:border-b-0 lg:border-r">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent dark:bg-accent-bright/10 dark:text-accent-bright">
                      <ServiceIcon className="size-7" strokeWidth={1.5} />
                    </div>
                    <CardHeader className="px-0 pt-6">
                      <CardTitle id={`${s.id}-title`} className="text-2xl">
                        {s.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {s.description}
                      </CardDescription>
                    </CardHeader>
                  </div>
                  <CardContent className="p-8 lg:col-span-3 lg:py-10">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted dark:text-slate-500">
                      Benefits
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-3 text-navy dark:text-slate-200">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent dark:text-accent-bright" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-8">
                      <Link to="/contact">Discuss this service</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.article>
            )
          })}
        </div>
      </div>

      <section className="border-y border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between"
          >
            <img
              src={BRAND_IMG.team}
              alt="Team collaborating"
              className="h-48 w-full max-w-md rounded-2xl object-cover shadow-lg ring-2 ring-accent/15 md:h-40 md:w-72"
              width={400}
              height={300}
              loading="lazy"
            />
            <p className="max-w-xl text-center text-lg leading-relaxed text-muted dark:text-stone-400 md:text-left">
              Behind every AIF service line is a team conversation, and we’d rather
              under-promise and document than dazzle you with jargon.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        subtitle="We can help prioritize goals and suggest a sensible first step."
        primaryLabel="Contact us"
        secondaryLabel="View products"
      />
    </>
  )
}
