import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import SearchForm from '../components/SearchForm'
import { AppContext } from '../context/AppContext'

const stats = [
  { label: 'Active donors', value: '12,480' },
  { label: 'Emergency requests served', value: '3,920' },
  { label: 'Cities covered', value: '56' }
]

export default function Home() {
  const navigate = useNavigate()
  const { searchFilters, updateSearchFilters } = useContext(AppContext)

  const handleSearch = (data) => {
    updateSearchFilters(data)
    navigate('/search')
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-600">
            Emergency-first donor discovery
          </span>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Find nearby blood donors in minutes.
          </h1>
          <p className="text-lg text-slate-600">
            BloodLine helps hospitals and families locate verified donors fast. Use
            live availability updates and location filters to reach the right people
            quickly.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => navigate('/request')}>Request Blood</Button>
            <Button variant="secondary" onClick={() => navigate('/register')}>
              Become a Donor
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
          <h2 className="text-lg font-semibold text-slate-900">Search donors now</h2>
          <p className="mt-2 text-sm text-slate-500">
            Enter a blood group and location to view nearby donors.
          </p>
          <div className="mt-6">
            <SearchForm defaultValues={searchFilters} onSubmit={handleSearch} />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 rounded-3xl bg-slate-900 px-6 py-10 text-white sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
          <h3 className="text-lg font-semibold text-slate-900">Verified donor pool</h3>
          <p className="mt-3 text-sm text-slate-500">
            We partner with hospitals and NGOs to keep donor profiles verified
            and ready for urgent outreach.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
          <h3 className="text-lg font-semibold text-slate-900">Availability tracking</h3>
          <p className="mt-3 text-sm text-slate-500">
            Donors can update availability in real time, ensuring patients only
            reach people who can respond.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
          <h3 className="text-lg font-semibold text-slate-900">Secure communication</h3>
          <p className="mt-3 text-sm text-slate-500">
            Built for privacy-first messaging and rapid coordination once backend
            APIs are connected.
          </p>
        </div>
      </section>
    </div>
  )
}
