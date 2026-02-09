import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/bloodline-logo.png'

const navLinkClasses = (isActive, extraClasses = '') =>
  [
    'text-sm font-semibold transition',
    isActive ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600',
    extraClasses,
  ]
    .filter(Boolean)
    .join(' ')

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Find Donors', to: '/search' },
    { label: 'Become a Donor', to: '/register' },
    { label: 'Request Blood', to: '/request' },
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Edit Profile', to: '/edit-profile' },
  ]

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <img src={logo} alt="BloodLine logo" className="h-9 w-9 object-contain" />
          <span className="leading-none">BloodLine</span>
        </NavLink>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 transition hover:border-primary-200 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-lg">
            ☰
          </span>
        </button>
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => navLinkClasses(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div
        className={`border-t border-slate-100 bg-white px-4 pb-4 pt-3 transition-all duration-200 md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                navLinkClasses(
                  isActive,
                  'rounded-md px-3 py-2 text-base hover:bg-primary-50'
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}