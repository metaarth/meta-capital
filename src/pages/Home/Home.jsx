import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Compass,
  Heart,
  LineChart,
  PiggyBank,
  RefreshCw,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SEO from '@/components/seo/SEO'
import { Button } from '@/components/ui/button'
import HeroChart from '@/components/sections/HeroChart'
import CTASection from '@/components/sections/CTASection'
import TestimonialSlider from '@/components/sections/TestimonialSlider'
import ServiceCard from '@/components/cards/ServiceCard'
import { BLOG_POSTS } from '@/data/blog'

/** Human-centered finance photography (Unsplash) */
const IMG = {
  hero:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=85&auto=format&fit=crop',
  advisor:
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85&auto=format&fit=crop',
  founder:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85&auto=format&fit=crop',
  family:
    'https://images.unsplash.com/photo-1511895426328-dc871f130835?w=900&q=85&auto=format&fit=crop',
  professional:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=85&auto=format&fit=crop',
  meeting:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85&auto=format&fit=crop',
  reading:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=85&auto=format&fit=crop',
}

const STATS = [
  { value: '20+', label: 'Years collective experience', sub: 'Markets & governance' },
  { value: '100+', label: 'Sophisticated relationships', sub: 'UHNIs & family offices' },
  { value: 'SEBI', label: 'Regulatory alignment', sub: 'Structured disclosures' },
  { value: 'GARP', label: 'Research philosophy', sub: 'Growth at reasonable prices' },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    text: 'We clarify goals, constraints, liquidity, and risk tolerance before any product discussion.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Plan',
    text: 'Asset mix and fund sleeves are documented with a clear review and rebalancing policy.',
    icon: LineChart,
  },
  {
    step: '03',
    title: 'Invest',
    text: 'Execution follows suitability checks; no hype, no unnecessary churn.',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: 'Review',
    text: 'Scheduled reviews, transparent reporting, and course corrections when life changes.',
    icon: RefreshCw,
  },
]

const PEOPLE_WE_SERVE = [
  {
    title: 'Family offices & generations',
    text: 'Planning that respects succession, liquidity events, and the stories behind the balance sheet.',
    image: IMG.family,
    alt: 'Family reviewing documents together at home',
    accent: 'border-l-4 border-accent',
  },
  {
    title: 'Founders & owners',
    text: 'Concentrated business risk on one side; diversified, documented wealth on the other.',
    image: IMG.founder,
    alt: 'Business professional in formal attire',
    accent: 'border-l-4 border-accent-bright',
  },
  {
    title: 'Professionals & executives',
    text: 'SIPs, tax-aware transitions, and portfolios that match real career arcs — not generic models.',
    image: IMG.professional,
    alt: 'Smiling professional woman in office setting',
    accent: 'border-l-4 border-gold',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Who is Metaarth Capital best suited for?',
    a: 'Typically Ultra-HNIs, family offices, and investors who want institutional process with direct access — not off-the-shelf retail packaging.',
  },
  {
    q: 'Do you guarantee returns?',
    a: 'No. Mutual funds and market-linked investments carry risk. We focus on process, diversification, and alignment — not promises about outcomes.',
  },
  {
    q: 'How do you charge for advice or portfolio services?',
    a: 'Fee structures depend on scope and are disclosed upfront. Ask us for a clear written overview during consultation.',
  },
  {
    q: 'How often will we review my portfolio?',
    a: 'We agree a cadence — often quarterly or semi-annual — unless a material life or market event warrants an ad-hoc discussion.',
  },
]

export default function Home() {
  const featured = BLOG_POSTS[0]

  return (
    <>
      <SEO
        title="Home"
        description="Grow your wealth with smart investment strategies — mutual funds, SIP, goal-based planning, and portfolio management from Metaarth Capital."
        path="/"
      />

      {/* Hero: copy + human imagery + chart */}
      <section className="relative overflow-hidden bg-brand-stripes" aria-labelledby="hero-heading">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50/80 via-cream to-[#fef9c3]/70 dark:from-red-950/30 dark:via-[#1c1917] dark:to-[#1c1917]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(250,204,21,0.35),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(220,38,38,0.12),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm dark:bg-stone-900/80">
                <span className="size-1.5 rounded-full bg-accent-bright" aria-hidden />
                Metaarth Capital
              </p>
              <h1
                id="hero-heading"
                className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              >
                <span className="text-navy dark:text-white">Grow your wealth with </span>
                <span className="text-gradient-brand">smart, human</span>
                <span className="text-navy dark:text-white"> investment strategies</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted dark:text-stone-400">
                Real people behind every plan — mutual funds, SIP, and portfolio
                management built around your goals, not a template.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/investment-products">Start investing</Link>
                </Button>
                <Button asChild variant="accent" size="lg">
                  <Link to="/contact">Book consultation</Link>
                </Button>
              </div>
              <p className="mt-8 max-w-md text-sm italic leading-relaxed text-stone-600 dark:text-stone-500">
                “Markets are noisy. Your future shouldn’t be — we help you stay
                invested to the life you’re actually planning for.”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-[var(--shadow-yellow)] ring-2 ring-accent/20 dark:border-stone-800 dark:ring-accent-bright/25">
                <img
                  src={IMG.hero}
                  alt="Diverse team collaborating on strategy in a modern office"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:h-[420px] lg:min-h-[360px]"
                  width={800}
                  height={640}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-900/55 via-transparent to-yellow-400/25" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="max-w-[200px] text-xs font-medium leading-snug text-white drop-shadow-md sm:max-w-xs sm:text-sm">
                    Strategy sessions with people who speak plainly — and listen
                    first.
                  </p>
                  <span className="hidden rounded-lg bg-accent-bright/95 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-navy shadow sm:block">
                    People first
                  </span>
                </div>
              </div>
              <div className="relative z-10 mt-6 lg:absolute lg:-bottom-8 lg:left-4 lg:mt-0 lg:w-[min(100%,380px)]">
                <HeroChart />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-y border-stone-200/60 bg-section-mesh py-11 dark:border-stone-800"
        aria-labelledby="human-finance-heading"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-stone-200/80 bg-white/85 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06]">
                <Heart className="size-7 text-accent dark:text-accent-bright" strokeWidth={1.5} />
              </div>
    <div>
                <h2
                  id="human-finance-heading"
                  className="font-display text-xl font-bold tracking-tight text-navy dark:text-white sm:text-2xl"
                >
                  Finance should feel human — not like a ticker tape
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted dark:text-stone-400">
                  We blend data with dialogue: your milestones, your risk sleep-at-night
                  level, and the conversations that matter around the dinner table.
                </p>
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={IMG.meeting}
              alt="Colleagues in a focused business discussion"
              className="hidden h-28 w-44 rounded-xl object-cover shadow-lg ring-2 ring-stone-200/80 dark:ring-white/25 lg:block xl:h-32 xl:w-52"
              width={208}
              height={128}
            />
          </div>
        </div>
      </section>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-14 dark:border-stone-800"
        aria-label="Firm highlights"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`rounded-xl border border-stone-200/80 bg-white/90 px-5 py-6 text-center shadow-sm dark:border-stone-700 dark:bg-white/[0.05] sm:text-left ${
                i % 2 === 0 ? 'border-l-4 border-l-accent' : 'border-l-4 border-l-accent-bright'
              }`}
            >
              <p className="font-display text-3xl font-bold text-accent dark:text-accent-bright">
                {s.value}
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-navy dark:text-white">
                {s.label}
              </p>
              <p className="mt-0.5 text-xs text-muted dark:text-stone-500">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who we serve — real humans */}
      <section
        className="border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="people-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Real lives · Real goals
            </p>
            <h2
              id="people-heading"
              className="mt-3 font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
            >
              We work with <span className="text-gradient-brand">people</span>, not
              just portfolios
            </h2>
            <p className="mt-4 text-muted dark:text-stone-400">
              Whether you’re protecting what you built or compounding for the next
              chapter — the conversation starts with you, not a product shelf.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PEOPLE_WE_SERVE.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[var(--shadow-card)] dark:border-stone-700 dark:bg-white/[0.05] ${item.accent}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    width={400}
                    height={320}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/65 via-stone-900/10 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-14 dark:border-stone-800"
        aria-labelledby="trust-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-glass)] ring-2 ring-accent/15"
            >
              <img
                src={IMG.advisor}
                alt="Advisor on a call, supporting a client with financial planning"
                className="aspect-[4/3] w-full object-cover"
                width={700}
                height={525}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/35 via-transparent to-stone-900/15" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2
                id="trust-heading"
                className="font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl"
              >
                Trusted partner —{' '}
                <span className="text-accent dark:text-accent-bright">with room to listen</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted dark:text-stone-400 lg:mx-0">
                Regulatory rigour doesn’t mean robotic service. We combine
                disclosure discipline with advisors who explain, challenge kindly,
                and stay reachable.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                {[
                  { label: 'SEBI', sub: 'Regulatory framework', ring: 'ring-accent/30' },
                  { label: 'AMFI', sub: 'Industry standards', ring: 'ring-accent-bright/40' },
                  { label: 'Compliance', sub: 'Documented processes', ring: 'ring-gold/40' },
                ].map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`flex min-w-[130px] flex-col items-center rounded-2xl border border-stone-200/90 bg-white/95 px-6 py-5 shadow-sm ring-1 ${b.ring} dark:border-stone-600 dark:bg-white/[0.06] dark:ring-white/5`}
                  >
                    <span className="font-display text-lg font-bold text-accent dark:text-accent-bright">
                      {b.label}
                    </span>
                    <span className="mt-1 text-center text-xs text-muted dark:text-stone-500">
                      {b.sub}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="rounded-md bg-accent-bright/25 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-dark dark:bg-accent-bright/20 dark:text-accent-bright">
              Services
            </span>
            <h2
              id="services-heading"
              className="mt-4 font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
            >
              What we help you with
            </h2>
            <p className="mt-3 text-muted dark:text-stone-400">
              Core building blocks for long-term wealth — explained in plain language.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={BarChart3}
              title="Mutual funds"
              description="Fund selection and allocation aligned to your risk profile and time horizon."
              href="/services#mutual-funds"
              delay={0}
            />
            <ServiceCard
              icon={PiggyBank}
              title="SIP planning"
              description="Systematic plans designed to reduce timing noise and support consistency."
              href="/services#sip"
              delay={0.06}
            />
            <ServiceCard
              icon={Target}
              title="Goal-based investment"
              description="Map education, retirement, and liquidity goals to the right asset mix."
              href="/services#goals"
              delay={0.12}
            />
            <ServiceCard
              icon={TrendingUp}
              title="Portfolio management"
              description="Ongoing review, rebalancing discipline, and clear reporting."
              href="/services#portfolio"
              delay={0.18}
            />
          </div>
        </div>
      </section>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2
              id="process-heading"
              className="font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
            >
              How we work with you
            </h2>
            <p className="mt-3 text-muted dark:text-stone-400">
              A transparent sequence from first conversation to ongoing partnership.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, i) => {
              const StepIcon = item.icon
              return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border border-stone-200/80 bg-white/95 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm dark:border-stone-700/50 dark:bg-white/[0.05]"
              >
                <span className="inline-block rounded-md border border-accent/20 bg-accent/95 px-2.5 py-0.5 font-display text-xs font-bold text-white dark:bg-accent/90">
                  {item.step}
                </span>
                <StepIcon
                  className="mt-3 size-9 text-accent dark:text-accent-bright"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
                  {item.text}
                </p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      <section
        className="border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="philosophy-heading"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid overflow-hidden rounded-3xl border border-stone-800/80 bg-[#1a1412] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)] ring-1 ring-white/5 lg:grid-cols-5"
          >
            <div className="relative hidden min-h-[280px] lg:col-span-2 lg:block">
              <img
                src={IMG.reading}
                alt="Team reviewing financial documents and charts together"
                className="absolute inset-0 h-full w-full object-cover"
                width={600}
                height={560}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-950/30 to-[#1a1412]" />
            </div>
            <div className="relative px-8 py-12 text-white sm:px-12 sm:py-14 lg:col-span-3">
              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 70% at 100% 0%, rgba(185, 28, 28, 0.2), transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(161, 98, 7, 0.1), transparent 50%)',
                }}
                aria-hidden
              />
              <Sparkles
                className="pointer-events-none absolute right-6 top-6 z-10 size-10 text-accent-bright/45"
                aria-hidden
              />
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-bright/95">
                  Investment philosophy
                </p>
                <h2
                  id="philosophy-heading"
                  className="mt-4 font-display text-2xl font-bold sm:text-3xl"
                >
                  Price is what you pay. Value is what you get.
                </h2>
                <p className="mt-2 text-sm text-stone-300">— Warren Buffett</p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-200/95">
                  We apply a GARP mindset: seek quality at sensible valuations, respect
                  risk, and let process — not noise — drive decisions. The best
                  spreadsheet can’t replace a clear conversation about what you’re
                  optimizing for.
                </p>
                <Button asChild variant="accent" className="mt-8">
                  <Link to="/investment-philosophy">Our philosophy</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="why-heading"
            className="text-center font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
          >
            Why <span className="text-accent">choose</span>{' '}
            <span className="text-accent-bright dark:text-gold">us</span>
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Personalized advice',
                text: 'Recommendations grounded in your constraints — not generic model portfolios.',
              },
              {
                icon: Shield,
                title: 'Expert team',
                text: 'Experience across research, risk, and client governance.',
              },
              {
                icon: BarChart3,
                title: 'Long-term wealth planning',
                text: 'Process-first approach focused on sustainability over headlines.',
              },
            ].map((item, i) => {
              const WhyIcon = item.icon
              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-stone-200/80 bg-white/95 p-8 shadow-[var(--shadow-card)] backdrop-blur-sm dark:border-stone-700/50 dark:bg-white/[0.06]"
              >
                <WhyIcon
                  className="size-10 text-accent dark:text-accent-bright"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-stone-400">
                  {item.text}
                </p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      <section
        className="border-y border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
          >
            Common questions
          </motion.h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted dark:text-stone-400">
            Straight answers — we prefer clarity over sales language.
          </p>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-stone-200/90 bg-stone-50/80 px-5 py-1 open:border-stone-300 open:bg-white open:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] dark:border-stone-700 dark:bg-white/[0.04] dark:open:border-stone-600"
              >
                <summary className="cursor-pointer list-none py-4 font-display text-sm font-semibold text-navy marker:content-none dark:text-white [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-accent transition-transform group-open:rotate-180 dark:text-accent-bright">
                      ▼
                    </span>
                  </span>
                </summary>
                <p className="border-t border-stone-200/80 pb-4 pt-3 text-sm leading-relaxed text-muted dark:border-stone-700 dark:text-stone-400">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
        aria-labelledby="insight-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                id="insight-heading"
                className="font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
              >
                Featured insight
              </h2>
              <p className="mt-2 text-muted dark:text-stone-400">
                Education only — not personal advice.
              </p>
            </motion.div>
            <Button variant="ghost" className="gap-1 text-accent dark:text-accent-bright" asChild>
              <Link to="/blog">
                View all
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 grid overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-[var(--shadow-card)] dark:border-stone-700 dark:bg-white/[0.05] lg:grid-cols-2"
          >
            <div className="relative min-h-[240px]">
              <img
                src={IMG.reading}
                alt="Professionals analyzing investment materials at a desk"
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={500}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-stone-900/55 via-stone-800/25 to-stone-900/40" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <BookOpen className="size-16 text-white/90 drop-shadow-lg" strokeWidth={1} />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-bright">
                {featured.categoryLabel}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-navy dark:text-white">
                {featured.title}
              </h3>
              <p className="mt-3 text-muted dark:text-stone-400">{featured.description}</p>
              <Button className="mt-8 w-fit gap-2" asChild>
                <Link to={`/blog/${featured.slug}`}>
                  Read article
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.article>
    </div>
      </section>

      <TestimonialSlider />

      <CTASection />
    </>
  )
}
