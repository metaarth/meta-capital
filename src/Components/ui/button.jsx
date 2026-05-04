import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-offset-navy',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-white shadow-md hover:bg-accent-dark hover:shadow-lg',
        accent:
          'bg-accent-bright text-navy shadow-md hover:bg-accent-bright-dark hover:text-navy',
        outline:
          'border border-stone-200 bg-white/80 backdrop-blur-sm text-navy hover:border-accent/35 hover:bg-cream dark:border-stone-600 dark:bg-white/5 dark:text-white dark:hover:bg-white/10',
        ghost: 'text-navy hover:bg-stone-100 dark:text-slate-200 dark:hover:bg-white/10',
        link: 'text-accent underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 rounded-md px-4 text-xs',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
