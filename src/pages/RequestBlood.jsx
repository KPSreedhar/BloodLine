import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { api } from '../services/api'

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
const urgencyOptions = ['Critical (0-2 hrs)', 'Urgent (2-6 hrs)', 'Scheduled (within 24 hrs)']

export default function RequestBlood() {
  const [status, setStatus] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    const response = await api.submitBloodRequest(data)
    setStatus(response.data.message)
    reset()
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
        <h1 className="text-3xl font-semibold text-slate-900">Request blood</h1>
        <p className="mt-2 text-sm text-slate-500">
          Share urgent requirements and we will notify available donors.
        </p>

        <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Blood group
            <select
              className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 ${
                errors.bloodGroup ? 'border-primary-500' : 'border-slate-200'
              }`}
              {...register('bloodGroup', { required: 'Select a blood group' })}
            >
              <option value="">Choose group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
            {errors.bloodGroup ? (
              <span className="text-xs font-normal text-primary-600">
                {errors.bloodGroup.message}
              </span>
            ) : null}
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Location
            <input
              type="text"
              placeholder="Hospital, city, or pincode"
              className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 ${
                errors.location ? 'border-primary-500' : 'border-slate-200'
              }`}
              {...register('location', { required: 'Location is required' })}
            />
            {errors.location ? (
              <span className="text-xs font-normal text-primary-600">
                {errors.location.message}
              </span>
            ) : null}
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Urgency
            <select
              className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 ${
                errors.urgency ? 'border-primary-500' : 'border-slate-200'
              }`}
              {...register('urgency', { required: 'Select urgency' })}
            >
              <option value="">Choose urgency</option>
              {urgencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.urgency ? (
              <span className="text-xs font-normal text-primary-600">
                {errors.urgency.message}
              </span>
            ) : null}
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea
              rows={4}
              placeholder="Provide hospital details, contact person, and any notes."
              className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 ${
                errors.message ? 'border-primary-500' : 'border-slate-200'
              }`}
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message ? (
              <span className="text-xs font-normal text-primary-600">
                {errors.message.message}
              </span>
            ) : null}
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit request'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => reset()}>
              Reset
            </Button>
            {status ? (
              <span className="text-sm font-semibold text-emerald-600">{status}</span>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  )
}
