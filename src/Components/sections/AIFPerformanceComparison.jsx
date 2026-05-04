import { motion } from 'framer-motion'
import {
  AIF_PERFORMANCE_META,
  AIF_PERFORMANCE_ROWS,
} from '@/data/aifPerformance'

/**
 * AIF-only performance table (no PMS toggle). Styled to match site mesh sections
 * and card treatment. Data: `@/data/aifPerformance`.
 */
export default function AIFPerformanceComparison({
  rows = AIF_PERFORMANCE_ROWS,
  meta = AIF_PERFORMANCE_META,
}) {
  return (
    <section
      className="relative overflow-hidden border-y border-stone-200/60 bg-section-mesh py-16 md:py-20 dark:border-stone-800"
      aria-labelledby="aif-performance-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent dark:via-accent-bright/20" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-accent dark:text-accent-bright">
            {meta.fundLabel}
          </p>
          <h2
            id="aif-performance-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl"
          >
            <span className="text-gradient-brand">Performance</span>{' '}
            comparison
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted dark:text-stone-400 sm:text-base">
            {meta.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-10 overflow-hidden rounded-2xl border border-stone-200/90 bg-white/95 shadow-[var(--shadow-card)] ring-1 ring-accent/10 dark:border-stone-700 dark:bg-white/[0.05] dark:ring-accent-bright/15"
        >
          <div className="border-b border-stone-200/80 bg-accent-bright/20 px-5 py-3 dark:border-stone-600 dark:bg-accent-bright/10">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-navy dark:text-stone-200">
              Net of fees vs benchmark · illustrative only
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200/90 bg-stone-50/90 dark:border-stone-600 dark:bg-white/[0.04]">
                  <th
                    scope="col"
                    className="px-5 py-4 font-display font-semibold text-navy dark:text-white sm:px-8 sm:py-4"
                  >
                    Period
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-center font-display font-semibold text-accent dark:text-accent-bright sm:py-4"
                  >
                    AIF (Net)
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-center font-display font-semibold text-navy dark:text-white sm:py-4"
                  >
                    Benchmark
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-center font-display font-semibold text-emerald-700 sm:px-8 sm:py-4 dark:text-emerald-400"
                  >
                    Alpha
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.period}
                    className="border-b border-stone-200/80 last:border-b-0 dark:border-stone-700/80"
                  >
                    <td className="px-5 py-4 font-medium text-navy dark:text-stone-200 sm:px-8 sm:py-4">
                      {row.period}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold tabular-nums text-accent dark:text-accent-bright sm:py-4">
                      {row.aifNet}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold tabular-nums text-navy dark:text-stone-200 sm:py-4">
                      {row.benchmark}
                    </td>
                    <td className="px-5 py-4 text-center font-semibold tabular-nums text-emerald-600 sm:px-8 sm:py-4 dark:text-emerald-400">
                      {row.alpha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted dark:text-stone-500">
          Illustrative figures for layout only — not live performance data. Past
          performance is not indicative of future results. Read scheme / offer
          documents and verify registration on SEBI channels. Request official
          factsheets and disclosures from our team. {meta.benchmarkNote}
        </p>
      </div>
    </section>
  )
}
