import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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

  useEffect(() => {
    if (!visible) return
    setCanAcknowledge(false)
    setAgreedToTerms(false)
    setScrollProgress(0)
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
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mutual-fund-disclaimer-title"
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-300/80 bg-linear-to-b from-amber-50 to-white text-amber-950 shadow-[0_30px_80px_rgba(2,6,23,0.45)] dark:border-amber-500/30 dark:from-[#2d1907] dark:to-[#1f160f] dark:text-amber-100"
      >
        <div className="border-b border-amber-300/60 bg-amber-100/70 px-6 py-5 dark:border-amber-500/20 dark:bg-amber-900/20">
          <img
            src={logoUrl}
            alt="Metaarth Capital"
            className="mx-auto h-14 w-auto object-contain"
            width={220}
            height={56}
          />
          <div className="mt-4 flex items-center justify-center">
            <span className="rounded-full border border-amber-400/70 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-800 dark:border-amber-400/30 dark:bg-amber-950/60 dark:text-amber-300">
              Investor Notice
            </span>
          </div>
        </div>
        <h2
          id="mutual-fund-disclaimer-title"
          className="px-6 pt-5 text-center font-display text-2xl font-semibold"
        >
          Important Disclaimer
        </h2>
        <p className="px-6 pt-2 text-center text-sm text-amber-800/90 dark:text-amber-200/80">
          Please review this information carefully before continuing.
        </p>
        <div
          ref={contentRef}
          onScroll={handleContentScroll}
          className="mx-6 mt-4 h-56 space-y-3 overflow-y-auto rounded-2xl border border-amber-300/70 bg-white/80 p-4 text-sm leading-relaxed shadow-inner dark:border-amber-500/20 dark:bg-black/25"
        >
          <p>
            Mutual Fund investments are subject to market risks. Please read all
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
          <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-amber-300/80 bg-white/70 px-3 py-2 text-xs leading-relaxed text-amber-900 dark:border-amber-500/30 dark:bg-black/20 dark:text-amber-200">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 size-4 accent-amber-700 dark:accent-amber-400"
            />
            <span>
              I have read and agree to the{' '}
              <Link
                to="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-300"
              >
                Terms & Conditions
              </Link>
              .
            </span>
          </label>
          <p className="mt-4 px-6 text-center text-xs font-medium text-amber-800 dark:text-amber-300">
          Scroll through the disclaimer and agree to the Terms & Conditions to continue.
        </p>
        </div>
        <div className="mt-4 h-1.5 w-full bg-amber-200/70 dark:bg-amber-900/50">
          <div
            className={`h-full transition-all duration-150 ${
              canAcknowledge ? 'bg-emerald-500' : 'bg-amber-500/80 dark:bg-amber-400'
            }`}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="flex justify-end px-6 py-5">
          <button
            type="button"
            onClick={() => setVisible(false)}
            disabled={!canAcknowledge || !agreedToTerms}
            className="rounded-xl bg-linear-to-r from-amber-700 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition enabled:hover:from-amber-800 enabled:hover:to-amber-700 disabled:cursor-not-allowed disabled:opacity-50 dark:from-amber-600 dark:to-amber-500 dark:enabled:hover:from-amber-500 dark:enabled:hover:to-amber-400"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  )
}
