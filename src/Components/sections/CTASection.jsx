import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection({
  title = 'Start your investment journey today',
  subtitle = 'Speak with our team to align strategy with your goals and risk profile.',
  primaryHref = '/contact',
  primaryLabel = 'Book consultation',
  secondaryHref = '/aif',
  secondaryLabel = 'Explore AIF',
}) {
  return (
    <section
      className="relative overflow-hidden border-y border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800"
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="cta-heading"
            className="font-display text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-stone-400">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link to={primaryHref}>
                {primaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
