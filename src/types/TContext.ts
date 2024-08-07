import { PropsWithChildren } from 'react'
import { DataValuesType, IDataForm } from './TForm'

// types context
export interface ClientProviderProps extends PropsWithChildren {}
export interface ClientContextType {
  data: IDataForm
  currentStep: number
  nextStep: () => void
  prevStep: () => void
  setFieldValue: (section: keyof IDataForm, value: DataValuesType) => void
  editField: (
    section: keyof IDataForm,
    field: string,
    value: DataValuesType
  ) => void
}
