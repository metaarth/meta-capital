import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Handshake, ShieldCheck, Users } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'

const PARTNER_TYPES = [
  {
    icon: Users,
    title: 'Family offices & UHNI advisors',
    text: 'Collaborate on mandate clarity, portfolio governance, and long-horizon allocation frameworks.',
  },
  {
    icon: Building2,
    title: 'Institutional channels',
    text: 'Work with a disciplined Category III AIF platform focused on process-led execution and transparent reporting.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-first collaborations',
    text: 'Engagement designed around suitability, disclosure standards, and documented investor communication.',
  },
]

export default function PartnerWithUs() {
  return (
    <>
      <SEO
        title="Partner with us"
        description="Explore partnership opportunities with Metaarth Capital for distribution, advisory collaboration, and institutional investor engagement."
        path="/partner-with-us"
      />

      <PageHero
        eyebrow="Partnerships"
        title="Partner"
        titleHighlight="with us"
        description="We work with aligned advisors, family offices, and institutions seeking disciplined investment processes and long-term investor outcomes."
        imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Business professionals in a collaborative strategy meeting"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Start a conversation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/aif">View AIF details</Link>
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
              Who we partner with
            </h2>
            <p className="mt-3 text-muted dark:text-stone-400">
              Partnerships built on suitability, transparency, and long-term client outcomes.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {PARTNER_TYPES.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-stone-200/90 bg-white/95 p-7 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5"
                >
                  <Icon className="size-9 text-accent dark:text-accent-bright" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">{item.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Handshake className="mx-auto size-12 text-accent dark:text-accent-bright" />
          <h2 className="mt-4 font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
            Let’s explore fit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted dark:text-stone-400">
            Share your collaboration model and client profile. Our team will connect to discuss mandate, process,
            and onboarding expectations.
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact">Partner inquiry</Link>
          </Button>
        </div>
      </section>

      <CTASection
        title="Build long-term partnerships"
        subtitle="If your investor philosophy aligns with ours, we’d be glad to explore a structured partnership."
        primaryLabel="Contact team"
        secondaryLabel="Our team"
        secondaryHref="/team"
      />
    </>
  )
}
