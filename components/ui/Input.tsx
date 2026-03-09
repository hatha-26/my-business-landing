import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <input
        className={cn(
          'px-4 py-3 rounded-xl bg-slate-800 border text-white placeholder:text-slate-500 outline-none transition-all',
          error
            ? 'border-red-500 focus:border-red-400'
            : 'border-slate-600 focus:border-blue-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}