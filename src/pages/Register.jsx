import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { api } from '../services/api'

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

export default function Register() {
  const [status, setStatus] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    const response = await api.registerDonor(data)
    setStatus(response.data.message)
    reset()
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
        <h1 className="text-3xl font-semibold text-slate-900">Donor registration</h1>
        <p className="mt-2 text-sm text-slate-500">
          Join BloodLine and make yourself available for urgent blood requests.
        </p>

        <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Full name"
            name="name"
            placeholder="Enter your name"
            register={(name) =>
              register(name, { required: 'Name is required' })
            }
            error={errors.name?.message}
          />
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
          <InputField
            label="City"
            name="city"
            placeholder="City"
            register={(name) =>
              register(name, { required: 'City is required' })
            }
            error={errors.city?.message}
          />
          <InputField
            label="Area"
            name="area"
            placeholder="Area or locality"
            register={(name) =>
              register(name, { required: 'Area is required' })
            }
            error={errors.area?.message}
          />
          <InputField
            label="Pincode"
            name="pincode"
            placeholder="Postal code"
            register={(name) =>
              register(name, {
                required: 'Pincode is required',
                minLength: { value: 5, message: 'Enter a valid pincode' }
              })
            }
            error={errors.pincode?.message}
          />
          <InputField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            register={(name) =>
              register(name, {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Enter a valid email'
                }
              })
            }
            error={errors.email?.message}
          />
          <label className="col-span-full flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
            <span>Available for emergency requests</span>
            <input
              type="checkbox"
              className="h-5 w-5 accent-primary-600"
              {...register('availability')}
            />
          </label>
          <div className="col-span-full flex flex-wrap items-center gap-3">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register as donor'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => reset()}>
              Reset
            </Button>
            {status ? (
              <span className="text-sm font-semibold text-emerald-600">
                {status}
              </span>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  )
}
