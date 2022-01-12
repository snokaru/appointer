import { useQuery, useMutation, useQueryClient } from 'react-query'
import { fetchAppointments, confirmAppointment, deleteAppointment } from './services'


export function useAppointmentsQuery(id) {
    return useQuery(['appointments', id], () => fetchAppointments(id))
}


export function useConfirmAppointmentMutation(businessId, appointmentId) {
    const queryClient = useQueryClient()

    return useMutation(() => confirmAppointment(businessId, appointmentId), {
        onSuccess: () => {
            queryClient.invalidateQueries('appointments')
        }
    })
}

export function useDeleteAppointmentMutation(userId, appointmentId) {
    const queryClient = useQueryClient()

    return useMutation(() => deleteAppointment(userId, appointmentId), {
        onSuccess: () => {
            queryClient.invalidateQueries('appointments')
        }
    })
}