import { fetchBusinesses, fetchBusinessById, fetchBusinessAppointmentTypes, createNewAppointment } from './services'
import { useQuery, useMutation } from 'react-query'
import BusinessDetailPage from './BusinessDetailPage'

export function useBusinessListQuery() {
  return useQuery('businesses', () => fetchBusinesses())
}

export function useBusinessDetailQuery(id) {
  return useQuery(['businesses', id], () => fetchBusinessById(id))
}

export function useBusinessAppointmentTypesListQuery(businessId) {
  return useQuery([`businesses`, businessId, 'appointment-types'], () => fetchBusinessAppointmentTypes(businessId))
}

export function useNewAppointmentMutation(businessId, appointmentTypeId) {
  return useMutation(data => createNewAppointment(businessId, appointmentTypeId, data))
}