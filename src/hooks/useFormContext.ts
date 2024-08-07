import React from 'react'
import { ClientContext } from '../context/ClientContext'

export const useFormContext = () => {
  const context = React.useContext(ClientContext)

  if (!context) {
    throw new Error('Tu ta mexendo onde não deve, meu fi!!!')
  }
  return context
}
