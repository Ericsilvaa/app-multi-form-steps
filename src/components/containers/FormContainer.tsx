import React, { PropsWithChildren } from 'react'

const FormContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=' space-y-4 p-4 shadow-xl rounded-md flex flex-col  bg-slate-100 w-[600px] h-[500px]'>
      {children}
    </div>
  )
}

export default FormContainer
