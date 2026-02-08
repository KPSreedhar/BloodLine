import { useForm } from 'react-hook-form'
import Button from './Button'

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

export default function SearchForm({
  defaultValues,
  onSubmit,
  compact = false
}) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`grid gap-4 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-[1fr_1fr_auto]'}`}
    >
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
          placeholder="City, area, or pincode"
          className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 ${
            errors.location ? 'border-primary-500' : 'border-slate-200'
          }`}
          {...register('location', { required: 'Enter a location' })}
        />
        {errors.location ? (
          <span className="text-xs font-normal text-primary-600">
            {errors.location.message}
          </span>
        ) : null}
      </label>

      <div className="flex items-end">
        <Button type="submit" className="w-full md:w-auto">
          Find Donors
        </Button>
      </div>
    </form>
  )
}
