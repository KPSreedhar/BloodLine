const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600',
  secondary:
    'border border-slate-300 bg-white text-slate-700 hover:border-primary-300 hover:text-primary-600 focus-visible:outline-primary-600',
  ghost: 'text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600'
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
