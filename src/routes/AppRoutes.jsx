import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import EditProfile from '../pages/EditProfile'
import Home from '../pages/Home'
import Register from '../pages/Register'
import RequestBlood from '../pages/RequestBlood'
import SearchResults from '../pages/SearchResults'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/request" element={<RequestBlood />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  )
}