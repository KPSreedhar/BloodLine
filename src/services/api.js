import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 8000
})

const mockDonors = [
  {
    id: 1,
    name: 'Asha Kumar',
    bloodGroup: 'A+',
    city: 'Hyderabad',
    area: 'Banjara Hills',
    availability: 'Available',
    lastActive: '10 mins ago'
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    bloodGroup: 'O-',
    city: 'Hyderabad',
    area: 'Hitech City',
    availability: 'On Call',
    lastActive: '30 mins ago'
  },
  {
    id: 3,
    name: 'Meera Iyer',
    bloodGroup: 'B+',
    city: 'Secunderabad',
    area: 'Sainikpuri',
    availability: 'Available',
    lastActive: '1 hour ago'
  }
]

export const api = {
  getDonors: async (filters) => {
    const filtered = mockDonors.filter((donor) => {
      const matchesGroup = filters?.bloodGroup
        ? donor.bloodGroup === filters.bloodGroup
        : true
      const matchesLocation = filters?.location
        ? `${donor.city} ${donor.area}`
            .toLowerCase()
            .includes(filters.location.toLowerCase())
        : true
      return matchesGroup && matchesLocation
    })

    return Promise.resolve({
      data: filtered
    })
  },
  registerDonor: async (payload) => {
    return Promise.resolve({
      data: {
        message: 'Registration submitted',
        payload
      }
    })
  },
  submitBloodRequest: async (payload) => {
    return Promise.resolve({
      data: {
        message: 'Request submitted',
        payload
      }
    })
  },
  client: apiClient
}
