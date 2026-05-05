import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, Building2, Scale } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import { Button } from '@/components/ui/button'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import { BRAND_IMG } from '@/data/brandImagery'

const TIMELINE = [
  {
    year: '2023',
    title: 'Inception',
    text: 'Metaarth Capital established with a focus on disciplined, research-driven strategies for sophisticated investors.',
  },
  {
    year: '2024',
    title: 'Framework maturity',
    text: 'Risk and governance processes strengthened; client reporting and review cadence formalized.',
  },
  {
    year: 'Today',
    title: 'Ongoing partnership',
    text: 'Serving Ultra-HNIs and family offices with transparency and long-horizon alignment.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About us"
        description="Learn about Metaarth Capital, mission, vision, and institutional approach to investment management for Ultra-HNIs and family offices."
        path="/about"
      />

      <PageHero
        eyebrow="Who we are"
        title="About"
        titleHighlight="Metaarth"
        titleRest=" Capital"
        description="Professional investment management with regulatory awareness, research discipline, and clear communication, built for long-term alignment with sophisticated investors."
        imageSrc={BRAND_IMG.city}
        imageAlt="Modern company infrastructure and institutional office district"
      >
        <Button asChild className="mt-8 gap-2">
          <Link to="/contact">Get in touch</Link>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            aria-labelledby="mission-heading"
          >
            <h2
              id="mission-heading"
              className="font-display text-2xl font-bold text-navy dark:text-white"
            >
              Mission
            </h2>
            <p className="mt-4 leading-relaxed text-muted dark:text-slate-400">
              To deliver investment outcomes through rigorous research, prudent
              risk management, and alignment with each client&apos;s objectives
              without compromising transparency or regulatory standards.
            </p>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            aria-labelledby="vision-heading"
          >
            <h2
              id="vision-heading"
              className="font-display text-2xl font-bold text-navy dark:text-white"
            >
              Vision
            </h2>
            <p className="mt-4 leading-relaxed text-muted dark:text-slate-400">
              To be a trusted partner for multi-generational wealth, combining
              institutional process with the attentiveness family offices expect.
            </p>
          </motion.section>
        </div>

        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="expertise-heading"
        >
          <h2
            id="expertise-heading"
            className="font-display text-2xl font-bold text-navy dark:text-white"
          >
            Financial expertise
          </h2>
          <p className="mt-4 max-w-3xl text-muted dark:text-slate-400">
            Our work spans equity-oriented research, portfolio construction, and
            governance, with leadership experience across market cycles. We
            emphasize Growth at Reasonable Prices (GARP) thinking: quality and
            valuation discipline rather than speculation.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Scale,
                title: 'Regulatory lens',
                text: 'Documentation, suitability, and clear disclosures.',
              },
              {
                icon: Award,
                title: 'Research culture',
                text: 'Bottom-up rigour and peer challenge on assumptions.',
              },
              {
                icon: Building2,
                title: 'Institutional process',
                text: 'Risk limits, oversight, and periodic reviews.',
              },
            ].map((item) => {
              const ItemIcon = item.icon
              return (
              <li
                key={item.title}
                className="rounded-2xl border-2 border-stone-200/80 bg-white/90 p-6 dark:border-stone-700/60 dark:bg-white/[0.04]"
              >
                <ItemIcon className="size-8 text-accent dark:text-accent-bright" />
                <h3 className="mt-3 font-display font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted dark:text-slate-400">
                  {item.text}
                </p>
              </li>
            )})}
          </ul>
        </motion.section>

        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="timeline-heading"
        >
          <h2
            id="timeline-heading"
            className="font-display text-2xl font-bold text-navy dark:text-white"
          >
            Our journey
          </h2>
          <ol className="relative mt-10 space-y-10 border-l-2 border-accent/25 pl-8 dark:border-accent-bright/30">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[39px] top-1 flex size-5 items-center justify-center rounded-full border-2 border-accent bg-white dark:bg-navy dark:border-accent-bright" />
                <p className="text-sm font-bold text-accent dark:text-accent-bright">
                  {item.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted dark:text-slate-400">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          className="mt-20 overflow-hidden rounded-3xl border-2 border-accent/20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={BRAND_IMG.meeting}
            alt="Team in a professional meeting"
            className="h-56 w-full object-cover sm:h-72"
            width={1200}
            height={500}
            loading="lazy"
          />
          <div className="border-t border-stone-200/60 bg-section-mesh px-6 py-4 dark:border-stone-700">
            <p className="text-center text-sm font-medium text-navy dark:text-stone-200">
              Culture matters as much as models, we hire for judgment, not just
              credentials.
            </p>
          </div>
        </motion.section>
      </div>

      <CTASection />
    </>
  )
}
