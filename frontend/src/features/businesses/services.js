import axios from 'axios'


export async function fetchBusinesses() {
  const response = await axios.get('/api/businesses/')
  return response.data
}

export async function fetchBusinessById(id) {
  const response = await axios.get(`/api/businesses/${id}/`)
  return response.data
}

export async function fetchBusinessAppointmentTypes(businessId) {
  const response = await axios.get(`/api/businesses/${businessId}/appointment-types`)
  return response.data
}

export async function createNewAppointment(businessId, appointmentTypeId, data) {
  const response = await axios.post(`/api/businesses/${businessId}/appointment-types/${appointmentTypeId}/appointments`, data)
  return response.data
}