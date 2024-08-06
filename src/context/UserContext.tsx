import { createContext, useState } from 'react'
import {
  UserContextType,
  UserProviderProps
} from '../components/types/TContext'
import { DataForm, DataValuesType } from '../components/types/TForm'

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentStep, setStepForm] = useState<number>(1)
  const [data, setData] = useState<DataForm>({} as DataForm)

  const nextStep = () => setStepForm((prev) => prev + 1)
  const prevStep = () => setStepForm((prev) => prev - 1)

  const setFieldValue = (section: keyof DataForm, value: DataValuesType) => {
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...value
      }
    }))
  }

  const contextValue = {
    data,
    setFieldValue,
    nextStep,
    prevStep,
    currentStep
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
