import api from '../config/api'
import { IClient } from '../types/IClient'

export const getClients = async (): Promise<IClient[]> => {
  const response = await api.get<IClient[]>('/clients')
  return response.data
}

export const getClientById = async (id: number): Promise<IClient> => {
  const response = await api.get<IClient>(`/clients/${id}`)
  return response.data
}

export const createClient = async (client: IClient): Promise<IClient> => {
  const response = await api.post<IClient>('/clients', client)
  return response.data
}

export const updateClient = async (
  id: number,
  client: Partial<IClient>
): Promise<IClient> => {
  const response = await api.put<IClient>(`/clients/${id}`, client)
  return response.data
}

export const deleteClient = async (id: number): Promise<void> => {
  await api.delete(`/clients/${id}`)
}
