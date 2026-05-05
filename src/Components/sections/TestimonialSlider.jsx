import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const TESTIMONIALS = [
  {
    quote:
      'A disciplined approach and clear communication have supported our long-term wealth planning objectives.',
    name: 'Rajesh Kumar',
    role: 'Family office director',
    org: 'Kumar Holdings',
  },
  {
    quote:
      'Research depth and risk awareness give our investment committee confidence in process-driven decisions.',
    name: 'Priya Sharma',
    role: 'Investment committee member',
    org: 'Sharma Group',
  },
  {
    quote:
      'Professional, transparent engagement, aligned with how we expect institutional partners to operate.',
    name: 'Amit Patel',
    role: 'Investor',
    org: 'Patel Enterprises',
  },
  {
    quote:
      'Their framework balances growth orientation with governance, important for multi-generational planning.',
    name: 'Dr. Vikram Singh',
    role: 'Medical professional',
    org: 'Singh Healthcare',
  },
]

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6500
    )
    return () => clearInterval(t)
  }, [])

  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)

  const current = TESTIMONIALS[index]

  return (
    <section
      className="relative overflow-hidden border-t border-stone-200/60 bg-section-mesh py-20 dark:border-stone-800"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl"
          >
            What clients value
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted dark:text-stone-400">
            Perspectives from sophisticated investors and family offices. Individual
            experiences may vary.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="flex items-center justify-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </Button>

            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl border border-stone-200/90 bg-white/95 p-8 shadow-[var(--shadow-card)] backdrop-blur-sm dark:border-stone-700/60 dark:bg-white/[0.08] sm:min-h-[180px] sm:p-10">
              <Quote className="absolute right-6 top-6 size-10 text-accent/15 dark:text-accent-bright/15" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  <blockquote className="relative text-lg font-medium leading-relaxed text-navy dark:text-slate-100">
                    “{current.quote}”
                  </blockquote>
                  <footer className="mt-6 text-sm text-muted dark:text-slate-400">
                    <cite className="not-italic font-semibold text-navy dark:text-white">
                      {current.name}
                    </cite>
                    <span className="mx-2 text-slate-300 dark:text-slate-600">·</span>
                    <span>
                      {current.role}, {current.org}
                    </span>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </Button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === index
                    ? 'w-8 bg-accent dark:bg-accent-bright'
                    : 'w-2 bg-slate-300 dark:bg-slate-600'
                )}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
