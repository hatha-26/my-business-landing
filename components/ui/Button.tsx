import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-all duration-200 disabled:opacity-50',
        variant === 'primary' && 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105',
        variant === 'secondary' && 'bg-slate-700 hover:bg-slate-600 text-white',
        variant === 'outline' && 'border border-slate-400 text-slate-300 hover:text-white hover:border-white',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-2.5 text-base',
        size === 'lg' && 'px-8 py-3 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}