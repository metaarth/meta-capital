import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function formatInr(n) {
  if (Number.isNaN(n) || !Number.isFinite(n)) return '—'
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n)
}

/** Future value of monthly SIP: FV = P * (((1+r)^n - 1) / r) * (1+r), r = monthly rate */
function sipFutureValue(monthly, annualRatePct, years) {
  const months = Math.max(0, Math.round(years * 12))
  if (months === 0) return 0
  const r = annualRatePct / 100 / 12
  if (r === 0) return monthly * months
  const factor = Math.pow(1 + r, months)
  return monthly * ((factor - 1) / r) * (1 + r)
}

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(25000)
  const [years, setYears] = useState(15)
  const [rate, setRate] = useState(12)

  const fv = useMemo(
    () => sipFutureValue(monthly, rate, years),
    [monthly, rate, years]
  )
  const invested = monthly * years * 12

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Calculator className="size-5 text-accent dark:text-accent-bright" />
          <CardTitle>SIP calculator</CardTitle>
        </div>
        <p className="text-sm text-muted dark:text-slate-400">
          Estimates are illustrative only. Actual returns depend on market
          conditions and fund performance.
        </p>
      </CardHeader>
      <CardContent className="grid gap-8 pt-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label htmlFor="sip-monthly" className="text-sm font-medium text-navy dark:text-slate-200">
              Monthly investment (₹)
            </label>
            <input
              id="sip-monthly"
              type="range"
              min={1000}
              max={200000}
              step={1000}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="mt-2 w-full accent-accent"
            />
            <p className="mt-1 text-sm text-muted">{formatInr(monthly)} / month</p>
          </div>
          <div>
            <label htmlFor="sip-years" className="text-sm font-medium text-navy dark:text-slate-200">
              Investment period (years)
            </label>
            <input
              id="sip-years"
              type="range"
              min={1}
              max={40}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="mt-2 w-full accent-accent"
            />
            <p className="mt-1 text-sm text-muted">{years} years</p>
          </div>
          <div>
            <label htmlFor="sip-rate" className="text-sm font-medium text-navy dark:text-slate-200">
              Expected annual return (%)
            </label>
            <input
              id="sip-rate"
              type="range"
              min={4}
              max={18}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-2 w-full accent-accent"
            />
            <p className="mt-1 text-sm text-muted">{rate}% p.a. (illustrative)</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center rounded-xl border border-stone-200/70 bg-section-mesh p-8 dark:border-stone-600/60"
        >
          <p className="text-sm font-medium text-muted dark:text-slate-400">
            Estimated corpus
          </p>
          <p className="mt-1 font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            {formatInr(fv)}
          </p>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted dark:text-slate-400">Total invested</dt>
              <dd className="font-medium text-navy dark:text-slate-100">
                {formatInr(invested)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted dark:text-slate-400">Est. gains</dt>
              <dd className="font-medium text-accent dark:text-accent-bright">
                {formatInr(Math.max(0, fv - invested))}
              </dd>
            </div>
          </dl>
        </motion.div>
      </CardContent>
    </Card>
  )
}
