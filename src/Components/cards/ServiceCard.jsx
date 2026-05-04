import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  href = '/services',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-full transition-shadow duration-300 hover:shadow-[var(--shadow-glass)]">
        <CardHeader>
          {Icon && (
            <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-bright/10 dark:text-accent-bright">
              <Icon className="size-6" strokeWidth={1.75} />
            </div>
          )}
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Button variant="ghost" size="sm" className="gap-1 px-0 text-accent dark:text-accent-bright" asChild>
            <Link to={href}>
              Learn more
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
