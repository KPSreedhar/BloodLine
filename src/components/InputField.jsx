export default function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  register,
  className = '',
  ...props
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm font-medium text-slate-700 ${className}`}>
      <span>{label}</span>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 ${
          error ? 'border-primary-500' : 'border-slate-200'
        }`}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error ? (
        <span className="text-xs font-normal text-primary-600">{error}</span>
      ) : null}
    </label>
  )
}
