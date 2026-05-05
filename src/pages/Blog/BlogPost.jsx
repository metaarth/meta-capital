import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import SEO from '@/components/seo/SEO'
import { Button } from '@/components/ui/button'
import { getPostBySlug } from '@/data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-navy dark:text-white">
          Article not found
        </h1>
        <Button asChild className="mt-6">
          <Link to="/blog">Back to insights</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
      />

      <div className="border-b border-stone-200/60 bg-section-mesh py-10 dark:border-stone-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Insight</p>
          <p className="mt-2 font-display text-lg font-semibold text-navy dark:text-white line-clamp-2">
            {post.title}
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <Button variant="ghost" size="sm" className="mb-8 gap-1 pl-0" asChild>
          <Link to="/blog">
            <ArrowLeft className="size-4" />
            All insights
          </Link>
        </Button>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-bright">
            {post.categoryLabel}
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-muted dark:text-slate-400">{post.readTime}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-12 space-y-8"
        >
          <section>
            <h2 className="font-display text-xl font-semibold text-navy dark:text-white">
              Summary
            </h2>
            <p className="mt-3 leading-relaxed text-muted dark:text-slate-400">
              {post.description}
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-navy dark:text-white">
              Key ideas
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted dark:text-slate-400">
              <li>
                Investing works best when decisions are tied to a written plan and
                reviewed on a schedule, not in reaction to short-term noise.
              </li>
              <li>
                Costs, diversification, and behavior often matter more than picking
                the top-performing fund from last year.
              </li>
              <li>
                Risk metrics describe the past; they do not predict the future.
                Suitability always comes first.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-navy dark:text-white">
              Disclaimer
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted dark:text-slate-400">
              Mutual fund investments are subject to market risks. Read all
              scheme-related documents carefully. This article is for general
              education only and not investment advice.
            </p>
          </section>
        </motion.div>
      </article>
    </>
  )
}
