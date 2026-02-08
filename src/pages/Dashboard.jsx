import { useState } from 'react'
import Button from '../components/Button'

const requestHistory = [
  {
    id: 1,
    bloodGroup: 'O-',
    location: 'Care Hospital, Hyderabad',
    status: 'Fulfilled',
    date: 'Today, 10:20 AM'
  },
  {
    id: 2,
    bloodGroup: 'B+',
    location: 'Yashoda Hospital, Secunderabad',
    status: 'In Progress',
    date: 'Yesterday, 6:45 PM'
  }
]

export default function Dashboard() {
  const [available, setAvailable] = useState(true)

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Your dashboard</h1>
            <p className="mt-2 text-sm text-slate-500">
              Manage your availability and track request activity.
            </p>
          </div>
          <Button variant="secondary">Edit Profile</Button>
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Profile summary</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Name: Asha Kumar</p>
              <p>Blood group: A+</p>
              <p>City: Hyderabad</p>
              <p>Last updated: 12 mins ago</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Availability</h2>
            <p className="mt-2 text-sm text-slate-500">
              Let requesters know when you are ready to donate.
            </p>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <span className="text-sm font-medium text-slate-700">
                {available ? 'Available for requests' : 'Currently unavailable'}
              </span>
              <input
                type="checkbox"
                checked={available}
                onChange={() => setAvailable((prev) => !prev)}
                className="h-5 w-5 accent-primary-600"
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Request history</h2>
            <Button variant="ghost">View all</Button>
          </div>
          <div className="mt-4 grid gap-4">
            {requestHistory.map((request) => (
              <div
                key={request.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-100 bg-white px-5 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {request.bloodGroup} • {request.location}
                  </p>
                  <p className="text-xs text-slate-500">{request.date}</p>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
                  {request.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
