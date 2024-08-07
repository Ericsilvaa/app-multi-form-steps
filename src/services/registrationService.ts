import api from '../config/api'
import { IRegistration } from '../types/IRegistration'

export const getRegistrations = async (): Promise<IRegistration[]> => {
  const response = await api.get<IRegistration[]>('/registrations')
  return response.data
}

export const getRegistrationById = async (
  id: number
): Promise<IRegistration> => {
  const response = await api.get<IRegistration>(`/registrations/${id}`)
  return response.data
}

export const createRegistration = async (
  registration: IRegistration
): Promise<IRegistration> => {
  const response = await api.post<IRegistration>('/registrations', registration)
  return response.data
}

export const updateRegistration = async (
  id: number,
  registration: Partial<IRegistration>
): Promise<IRegistration> => {
  const response = await api.put<IRegistration>(
    `/registrations/${id}`,
    registration
  )
  return response.data
}

export const deleteRegistration = async (id: number): Promise<void> => {
  await api.delete(`/registrations/${id}`)
}
