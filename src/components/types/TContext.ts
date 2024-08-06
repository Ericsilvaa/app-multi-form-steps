import { PropsWithChildren } from 'react'
import { DataForm, DataValuesType } from './TForm'

// types context
export interface UserProviderProps extends PropsWithChildren {}
export interface UserContextType {
  data: DataForm
  currentStep: number
  setFieldValue: (section: keyof DataForm, value: DataValuesType) => void
  nextStep: () => void
  prevStep: () => void
}
