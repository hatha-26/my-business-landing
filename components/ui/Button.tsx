import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
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
        'rounded-full font-semibold transition-all duration-300 disabled:opacity-50 cursor-pointer',
        variant === 'primary' && 'bg-emerald-500 hover:bg-emerald-400 text-white hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25',
        variant === 'secondary' && 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
        variant === 'outline' && 'border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400',
        variant === 'ghost' && 'text-gray-400 hover:text-white hover:bg-white/5',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-2.5 text-base',
        size === 'lg' && 'px-8 py-3.5 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}