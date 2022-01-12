import axios from 'axios'

export async function fetchAppointments(id) {
    const response = await axios.get(`/api/users/${id}/appointments`)
    return response.data
}

export async function confirmAppointment(businessId, appointmentId) {
    const response = await axios.patch(`/api/users/${businessId}/appointments/${appointmentId}`, {confirmed: true});
    return response.data
}

export async function deleteAppointment(userId, appointmentId) {
    const response = await axios.delete(`/api/users/${userId}/appointments/${appointmentId}`);
    return response.data
}
