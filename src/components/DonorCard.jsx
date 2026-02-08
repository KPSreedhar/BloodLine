import Button from './Button'

const availabilityStyles = {
  Available: 'bg-emerald-50 text-emerald-600',
  'On Call': 'bg-amber-50 text-amber-600',
  Offline: 'bg-slate-100 text-slate-500'
}

export default function DonorCard({ donor }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-primary-500">{donor.bloodGroup}</p>
          <h3 className="text-lg font-semibold text-slate-900">{donor.name}</h3>
          <p className="text-sm text-slate-500">
            {donor.area}, {donor.city}
          </p>
          <p className="mt-2 text-xs text-slate-400">Active {donor.lastActive}</p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            availabilityStyles[donor.availability] || availabilityStyles.Offline
          }`}
        >
          {donor.availability}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button className="flex-1" variant="primary">
          Request Blood
        </Button>
        <Button className="flex-1" variant="secondary">
          View Profile
        </Button>
      </div>
    </div>
  )
}
