import api from '../config/api'
import { IEmployee } from '../types/IEmployee'

export const getEmployees = async (): Promise<IEmployee[]> => {
  const response = await api.get<IEmployee[]>('/employees')
  return response.data
}

export const getEmployeeById = async (id: number): Promise<IEmployee> => {
  const response = await api.get<IEmployee>(`/employees/${id}`)
  return response.data
}

export const createEmployee = async (
  employee: IEmployee
): Promise<IEmployee> => {
  const response = await api.post<IEmployee>('/employees', employee)
  return response.data
}

export const updateEmployee = async (
  id: number,
  employee: Partial<IEmployee>
): Promise<IEmployee> => {
  const response = await api.put<IEmployee>(`/employees/${id}`, employee)
  return response.data
}

export const deleteEmployee = async (id: number): Promise<void> => {
  await api.delete(`/employees/${id}`)
}
