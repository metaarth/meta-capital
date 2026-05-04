import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function BlogCard({
  title,
  description,
  category,
  readTime,
  slug,
  delay = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[var(--shadow-glass)]">
        <CardHeader>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-bright">
            {category}
          </p>
          <CardTitle className="text-lg leading-snug">{title}</CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-0">
          <span className="flex items-center gap-1 text-xs text-muted dark:text-slate-500">
            <Clock className="size-3.5" />
            {readTime}
          </span>
          <Button variant="ghost" size="sm" className="gap-1 text-accent dark:text-accent-bright" asChild>
            <Link to={`/blog/${slug}`}>
              Read more
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.article>
  )
}
