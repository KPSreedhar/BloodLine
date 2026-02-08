import { NavLink } from 'react-router-dom'

const navLinkClasses = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'
  }`

export default function Navbar() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            BL
          </span>
          BloodLine
        </NavLink>
        <nav className="flex flex-wrap items-center gap-4">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/search" className={navLinkClasses}>
            Find Donors
          </NavLink>
          <NavLink to="/register" className={navLinkClasses}>
            Become a Donor
          </NavLink>
          <NavLink to="/request" className={navLinkClasses}>
            Request Blood
          </NavLink>
          <NavLink to="/dashboard" className={navLinkClasses}>
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
