import { cn } from '@/lib/utils'

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-slate-200/80 dark:bg-slate-700/50',
        className
      )}
      {...props}
    />
  )
}

export function PageSkeleton() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-16">
      <Skeleton className="mx-auto h-10 w-2/3 max-w-lg" />
      <Skeleton className="mx-auto h-4 w-full max-w-xl" />
      <div className="grid gap-6 md:grid-cols-3">
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
      </div>
    </div>
  )
}
