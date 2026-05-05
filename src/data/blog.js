export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'aif', label: 'AIF' },
  { id: 'investment-tips', label: 'Investment tips' },
  { id: 'market-insights', label: 'Market insights' },
]

export const BLOG_POSTS = [
  {
    slug: 'building-a-core-equity-allocation',
    title: 'Building a core AIF equity allocation',
    description:
      'How mandate clarity, allocation discipline, and rebalancing support compounding without unnecessary turnover.',
    category: 'aif',
    categoryLabel: 'AIF',
    readTime: '6 min read',
  },
  {
    slug: 'consistency-across-market-cycles',
    title: 'Staying consistent through market cycles',
    description:
      'Why disciplined deployment works best when paired with a documented plan and periodic review, not reactive changes.',
    category: 'investment-tips',
    categoryLabel: 'Investment tips',
    readTime: '5 min read',
  },
  {
    slug: 'reading-risk-metrics-in-fund-factsheets',
    title: 'Reading risk metrics in fund factsheets',
    description:
      'A practical overview of volatility measures and drawdowns, and what they do (and do not) tell you about future outcomes.',
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
    title: 'AIF risk budgeting in a changing rate cycle',
    description:
      'High-level considerations for position sizing, drawdown tolerance, and mandate suitability when rates are uncertain.',
    category: 'aif',
    categoryLabel: 'AIF',
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
