import React, { PropsWithChildren } from 'react'

const FormContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col items-center space-y-4 p-4 bg-white shadow-sm rounded-md'>
      {children}
    </div>
  )
}

export default FormContainer
