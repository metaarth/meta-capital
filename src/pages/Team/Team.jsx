import { motion } from 'framer-motion'
import SEO from '@/components/seo/SEO'
import CTASection from '@/components/sections/CTASection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ambrishnathImg from '@/assets/Team/amb.avif'
import nipunImg from '@/assets/Team/NM.avif'
import shivamImg from '@/assets/Team/SAN.avif'

const TEAM_MEMBERS = [
  {
    name: 'Ambrish Nath Tiwari',
    role: 'Founder',
    image: ambrishnathImg,
    summary:
      '20+ years in finance and investments. Visionary leadership focused on disciplined growth and long-term investor relationships.',
    points: [
      'Leads fund vision and institutional relationships',
      'Focus on governance, investor trust, and strategic direction',
    ],
  },
  {
    name: 'Nipun Madan',
    role: 'Fund Manager',
    image: nipunImg,
    summary:
      'SEBI registered research analyst with 20+ years of financial markets experience across research, analytics, and risk.',
    points: [
      'Research-led security selection and portfolio construction',
      'Strong focus on risk controls and process discipline',
    ],
  },
]

export default function Team() {
  return (
    <>
      <SEO
        title="Our team"
        description="Meet the professionals behind Metaarth Capital — founder, fund manager, and wealth management leadership."
        path="/team"
      />

      <section className="relative overflow-hidden border-b border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800 sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-accent-bright/30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-bright">
              Our team
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy dark:text-white sm:text-5xl">
              Leadership behind{' '}
              <span className="text-gradient-brand whitespace-nowrap">Metaarth Capital</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted dark:text-stone-400 sm:text-lg">
              Meet the experts responsible for research quality, risk discipline, and long-term investor outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="team-members-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              id="team-members-heading"
              className="font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
            >
              Leadership team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted dark:text-stone-400">
              Experienced professionals combining research, governance, and investor-first communication.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="mx-auto w-full max-w-md"
              >
                <Card className="h-full border-stone-200/90 bg-white/95 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5">
                  <div className="overflow-hidden rounded-t-xl border-b border-stone-200/80 dark:border-stone-700/70">
                    <img
                      src={member.image}
                      alt={`${member.name} portrait`}
                      className="h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm font-semibold text-accent dark:text-accent-bright">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted dark:text-stone-400">{member.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted dark:text-stone-400">
                      {member.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1.5 size-1.5 rounded-full bg-accent dark:bg-accent-bright" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Talk to our team"
        subtitle="Book a conversation to understand fit, mandate, and how we can support your long-term wealth plan."
        primaryLabel="Book consultation"
        secondaryLabel="Contact page"
        secondaryHref="/contact"
      />
    </>
  )
}
