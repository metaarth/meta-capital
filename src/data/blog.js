export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'mutual-funds', label: 'Mutual funds' },
  { id: 'investment-tips', label: 'Investment tips' },
  { id: 'market-insights', label: 'Market insights' },
]

export const BLOG_POSTS = [
  {
    slug: 'building-a-core-equity-allocation',
    title: 'Building a core equity allocation for long horizons',
    description:
      'How diversification, fund selection discipline, and rebalancing support compounding without unnecessary turnover.',
    category: 'mutual-funds',
    categoryLabel: 'Mutual funds',
    readTime: '6 min read',
  },
  {
    slug: 'sip-consistency-and-market-cycles',
    title: 'SIP consistency across market cycles',
    description:
      'Why rupee-cost averaging works best when paired with a documented plan and periodic review — not reactive changes.',
    category: 'investment-tips',
    categoryLabel: 'Investment tips',
    readTime: '5 min read',
  },
  {
    slug: 'reading-risk-metrics-in-fund-factsheets',
    title: 'Reading risk metrics in fund factsheets',
    description:
      'A practical overview of volatility measures and drawdowns — and what they do (and do not) tell you about future outcomes.',
    category: 'market-insights',
    categoryLabel: 'Market insights',
    readTime: '7 min read',
  },
  {
    slug: 'goal-based-buckets-and-asset-mix',
    title: 'Goal-based buckets and asset mix',
    description:
      'Aligning liquidity needs, time horizon, and risk capacity before choosing equity, debt, or hybrid exposure.',
    category: 'investment-tips',
    categoryLabel: 'Investment tips',
    readTime: '5 min read',
  },
  {
    slug: 'debt-funds-and-rate-environment',
    title: 'Debt funds and the rate environment',
    description:
      'High-level considerations for duration, credit quality, and suitability when rates are uncertain.',
    category: 'mutual-funds',
    categoryLabel: 'Mutual funds',
    readTime: '6 min read',
  },
  {
    slug: 'portfolio-review-checklist',
    title: 'A simple portfolio review checklist',
    description:
      'Questions to ask each year: drift from target allocation, fee impact, tax efficiency, and life changes.',
    category: 'investment-tips',
    categoryLabel: 'Investment tips',
    readTime: '4 min read',
  },
]

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
