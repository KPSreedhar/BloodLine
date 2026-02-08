import { createContext, useMemo, useState } from 'react'

const defaultFilters = {
  bloodGroup: '',
  location: ''
}

export const AppContext = createContext({
  userRole: 'requester',
  setUserRole: () => {},
  searchFilters: defaultFilters,
  updateSearchFilters: () => {}
})

export function AppProvider({ children }) {
  const [userRole, setUserRole] = useState('requester')
  const [searchFilters, setSearchFilters] = useState(defaultFilters)

  const updateSearchFilters = (nextFilters) => {
    setSearchFilters((prev) => ({ ...prev, ...nextFilters }))
  }

  const value = useMemo(
    () => ({
      userRole,
      setUserRole,
      searchFilters,
      updateSearchFilters
    }),
    [userRole, searchFilters]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
