import { motion } from 'framer-motion'

/**
 * Inner page hero, matches Home: stripes, red/yellow radials, optional image.
 */
export default function PageHero({
  eyebrow,
  title,
  titleHighlight,
  titleRest,
  description,
  imageSrc,
  imageAlt = '',
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-brand-stripes">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50/70 via-cream to-[#fef9c3]/60 dark:from-red-950/25 dark:via-[#1c1917] dark:to-[#1c1917]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_0%,rgba(250,204,21,0.22),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(220,38,38,0.1),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow && (
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy dark:text-white sm:text-5xl">
              {title}{' '}
              {titleHighlight && (
                <span className="text-gradient-brand">{titleHighlight}</span>
              )}
              {titleRest && (
                <span className="text-navy dark:text-white">{titleRest}</span>
              )}
            </h1>
            {description && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted dark:text-stone-400">
                {description}
              </p>
            )}
            {children}
          </motion.div>
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="overflow-hidden rounded-3xl border-4 border-white shadow-[var(--shadow-yellow)] ring-2 ring-accent/15 dark:border-stone-800">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                  width={900}
                  height={720}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-900/45 via-transparent to-yellow-300/20" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
