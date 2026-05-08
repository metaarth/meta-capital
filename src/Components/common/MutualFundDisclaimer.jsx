import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ShieldCheck } from 'lucide-react'
import logoUrl from '@/assets/logo.png'

export default function MutualFundDisclaimer() {
  const [visible, setVisible] = useState(true)
  const [canAcknowledge, setCanAcknowledge] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (!visible) return undefined

    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
    }
  }, [visible])

  const handleContentScroll = () => {
    if (!contentRef.current) return
    const { scrollTop, clientHeight, scrollHeight } = contentRef.current
    const maxScrollable = Math.max(scrollHeight - clientHeight, 1)
    const nextProgress = Math.min((scrollTop / maxScrollable) * 100, 100)
    setScrollProgress(nextProgress)
    const reachedBottom = scrollTop + clientHeight >= scrollHeight - 8
    setCanAcknowledge(reachedBottom)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-120 flex items-center justify-center bg-[#09090b]/75 p-4 backdrop-blur-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mutual-fund-disclaimer-title"
        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-white/90 text-navy shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#111113]/95 dark:text-stone-100 dark:ring-white/10"
      >
        <div className="border-b border-stone-200/70 bg-linear-to-r from-white via-stone-50 to-white px-6 py-4 dark:border-stone-700 dark:from-[#18181b] dark:via-[#131316] dark:to-[#18181b]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <img
              src={logoUrl}
              alt="Metaarth Capital"
              className="h-9 w-auto object-contain"
              width={220}
              height={56}
            />
            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent dark:border-accent-bright/40 dark:bg-accent-bright/10 dark:text-accent-bright">
              <AlertTriangle className="size-3.5" />
              Investor Notice
            </span>
          </div>
        </div>
        <div className="px-6 pb-3 pt-5">
          <h2 id="mutual-fund-disclaimer-title" className="font-display text-2xl font-semibold tracking-tight">
            Before You Continue
          </h2>
          <p className="mt-1.5 text-sm text-muted dark:text-stone-400">
            Review risk disclosures and confirm Terms & Conditions acceptance.
          </p>
        </div>
        <div
          ref={contentRef}
          onScroll={handleContentScroll}
          className="mx-6 mt-1 h-56 space-y-3 overflow-y-auto rounded-2xl border border-stone-200/90 bg-white/80 p-4 text-sm leading-relaxed shadow-inner dark:border-stone-700 dark:bg-white/5"
        >
          <p>
            Investments are subject to market risks. Please read all
            scheme related documents carefully before investing.
          </p>
          <p>
            This website is intended for informational and educational purposes
            only. Nothing on this site constitutes an offer to sell, a
            solicitation to buy, or a recommendation regarding any security,
            strategy, or product.
          </p>
          <p>
            Investments in equities, mutual funds, AIFs, and related market
            instruments are exposed to volatility, liquidity constraints, sector
            concentration, policy changes, taxation impact, and other risks that
            may lead to partial or total capital loss.
          </p>
          <p>
            Past performance is not indicative of future returns. Any examples,
            case studies, outlooks, estimates, projections, or expected outcomes
            are based on assumptions and may differ materially from actual
            results.
          </p>
          <p>
            Investors should evaluate suitability based on their own financial
            objectives, risk appetite, investment horizon, liquidity needs, and
            legal or tax position. Professional advice from financial, legal, and
            tax advisors is strongly recommended before taking any decision.
          </p>
          <p>
            By proceeding, you acknowledge that you have read and understood this
            disclaimer and agree to independently verify all investment related
            information before acting on it.
          </p>
          <div className="h-12" aria-hidden="true" />
        </div>
        <div className="mt-3 px-6">
          <div className="grid gap-2 rounded-xl border border-stone-200/90 bg-white/70 p-3 dark:border-stone-700 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-stone-500">
                Checklist
              </p>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  canAcknowledge
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                    : 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-300'
                }`}
              >
                {canAcknowledge ? 'Scrolled' : 'Scroll pending'}
              </span>
            </div>
            <label className="flex cursor-pointer items-start gap-2 text-xs leading-relaxed text-stone-700 dark:text-stone-300">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 size-4 accent-accent dark:accent-accent-bright"
            />
            <span>
              I have read and agree to the{' '}
              <Link
                to="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent-dark dark:text-accent-bright dark:hover:text-gold"
              >
                Terms & Conditions
              </Link>
              .
            </span>
            </label>
            <span
              className={`inline-flex w-fit rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                agreedToTerms
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-300'
              }`}
            >
              {agreedToTerms ? 'Terms accepted' : 'Terms pending'}
            </span>
          </div>
        </div>
        <div className="mt-4 h-1.5 w-full bg-stone-200 dark:bg-stone-700">
          <div
            className={`h-full transition-all duration-150 ${
              canAcknowledge ? 'bg-emerald-500' : 'bg-accent/70 dark:bg-accent-bright'
            }`}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <p className="inline-flex items-center gap-1 text-xs font-medium text-muted dark:text-stone-400">
            <ShieldCheck className="size-4 text-emerald-500" />
            Progress: {Math.round(scrollProgress)}%
          </p>
          <button
            type="button"
            onClick={() => setVisible(false)}
            disabled={!canAcknowledge || !agreedToTerms}
            className="rounded-xl bg-linear-to-r from-accent to-accent-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all enabled:hover:-translate-y-0.5 enabled:hover:from-accent-dark enabled:hover:to-red-900 enabled:hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 dark:from-accent dark:to-accent-dark dark:enabled:hover:from-brand-scarlet dark:enabled:hover:to-accent"
          >
            Agree & Continue
          </button>
        </div>
      </div>
    </div>
  )
}
