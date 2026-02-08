export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>BloodLine © 2025. Emergency-ready donor discovery platform.</p>
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
            24/7 Ready
          </span>
          <span className="text-xs">Privacy-first communications</span>
        </div>
      </div>
    </footer>
  )
}
