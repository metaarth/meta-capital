import { useMemo, useState } from 'react'
import SEO from '@/components/seo/SEO'
import PageHero from '@/components/sections/PageHero'
import { BRAND_IMG } from '@/data/brandImagery'
import BlogCard from '@/components/cards/BlogCard'
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/data/blog'
function BlogContent() {
  const [cat, setCat] = useState('all')
  const filtered = useMemo(() => {
    if (cat === 'all') return BLOG_POSTS
    return BLOG_POSTS.filter((p) => p.category === cat)
  }, [cat])

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for"
        titleHighlight="thoughtful"
        titleRest=" investors"
        description="Educational articles on AIF structures, risk, and market context, not personalized recommendations. Same craft as our home page: clarity, colour, and respect for your time."
        imageSrc={BRAND_IMG.focus}
        imageAlt="Professionals reviewing charts and documents"
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Article categories"
        >
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={cat === c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat === c.id
                  ? 'bg-accent text-white shadow-sm'
                  : 'bg-[#fef9c3]/80 text-navy hover:bg-accent-bright/40 dark:bg-white/10 dark:text-stone-200 dark:hover:bg-white/15'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              category={post.categoryLabel}
              readTime={post.readTime}
              slug={post.slug}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default function Blog() {
  return (
    <>
      <SEO
        title="Insights"
        description="AIF insights, risk frameworks, and market perspectives, Metaarth Capital blog."
        path="/blog"
      />
      <BlogContent />
    </>
  )
}
