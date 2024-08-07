/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sparse-arrays */
import React, { createContext, useState } from 'react'
import { ClientContextType, ClientProviderProps } from '../types/TContext'
import { DataValuesType, IDataForm } from '../types/TForm'

export const ClientContext = createContext<ClientContextType>(
  {} as ClientContextType
)

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [currentStep, setStepForm] = useState<number>(1)
  const [data, setData] = useState<IDataForm>({} as IDataForm)

  const nextStep = () => setStepForm((prev) => prev + 1)
  const prevStep = () => setStepForm((prev) => prev - 1)

  const setFieldValue = React.useCallback(
    (section: keyof IDataForm, value: DataValuesType) => {
      setData((prevData) => ({
        ...prevData,
        [section]: value
      }))
    },
    []
  )

  const editField = React.useCallback(
    (section: keyof IDataForm, field: string, value: DataValuesType) => {
      console.log('🚀 ~ ClientProvider ~ value:', value)
      setData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value
        }
      }))
    },
    []
  )

  // able to edit also
  // const setFieldValue = (section: keyof IDataForm, value: DataValuesType) => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     [section]: {
  //       ...prevData[section],
  //       ...value
  //     }
  //   }))
  // }

  const contextValue = {
    data,
    currentStep,
    nextStep,
    prevStep,
    setFieldValue,
    editField
  }

  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  )
}
