import { motion } from 'framer-motion'

const PATH =
  'M0,120 L40,100 L80,110 L120,75 L160,85 L200,50 L240,60 L280,35 L320,45 L360,20 L400,28'

export default function HeroChart() {
  return (
    <div
      className="relative h-[280px] w-full max-w-xl overflow-hidden rounded-2xl border border-stone-200/90 bg-section-mesh p-6 shadow-[var(--shadow-card)] backdrop-blur-md dark:border-stone-700/60 lg:h-[320px]"
      aria-hidden
    >
      <div className="mb-4 flex items-center justify-between text-xs text-muted dark:text-stone-400">
        <span className="font-medium">Wealth trajectory</span>
        <span className="rounded-full bg-accent-bright/25 px-2 py-0.5 font-semibold text-navy dark:bg-accent-bright/20 dark:text-accent-bright">
          Long-term
        </span>
      </div>
      <svg
        viewBox="0 0 400 140"
        className="h-[200px] w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#facc15" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        <motion.path
          d={`${PATH} L400,140 L0,140 Z`}
          fill="url(#chartFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.path
          d={PATH}
          fill="none"
          stroke="url(#chartLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {[80, 160, 240, 320].map((x, i) => (
          <motion.line
            key={x}
            x1={x}
            y1="20"
            x2={x}
            y2="130"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-stone-200 dark:text-stone-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.05 }}
          />
        ))}
      </svg>
      <p className="mt-2 text-center text-[11px] text-muted dark:text-stone-500">
        Illustrative growth curve — not representative of any specific product
        return.
      </p>
    </div>
  )
}
