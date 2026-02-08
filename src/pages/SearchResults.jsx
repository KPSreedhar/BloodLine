import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import DonorCard from '../components/DonorCard'
import SearchForm from '../components/SearchForm'
import { AppContext } from '../context/AppContext'
import { api } from '../services/api'

export default function SearchResults() {
  const { searchFilters, updateSearchFilters } = useContext(AppContext)
  const [donors, setDonors] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchDonors = async (filters) => {
    setLoading(true)
    const response = await api.getDonors(filters)
    setDonors(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchDonors(searchFilters)
  }, [searchFilters])

  const handleSearch = (data) => {
    updateSearchFilters(data)
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Donor results</h1>
          <p className="mt-2 text-sm text-slate-500">
            Showing donors that match your blood group and location filters.
          </p>
        </div>
        <Button variant="secondary" onClick={() => navigate('/request')}>
          Request blood
        </Button>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
        <SearchForm defaultValues={searchFilters} onSubmit={handleSearch} compact />
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {loading ? (
          <div className="col-span-full rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            Loading donors...
          </div>
        ) : donors.length ? (
          donors.map((donor) => <DonorCard key={donor.id} donor={donor} />)
        ) : (
          <div className="col-span-full rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            No donors found. Try widening your search or adjust your location.
          </div>
        )}
      </section>
    </div>
  )
}
