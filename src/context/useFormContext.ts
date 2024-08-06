import React from 'react'
import { UserContext } from './UserContext'

export const useFormContext = () => {
  const context = React.useContext(UserContext)

  if (!context) {
    throw new Error('Tu ta mexendo onde não deve, meu fi!!!')
  }
  return context
}
