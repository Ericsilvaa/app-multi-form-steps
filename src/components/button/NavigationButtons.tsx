import React from 'react'
import { useFormContext } from '../../hooks/useFormContext'

const NavigationButtons: React.FC = () => {
  const { prevStep, currentStep } = useFormContext()
  const initialForm = currentStep === 1
  const isReview = currentStep === 5

  const title = isReview ? 'Finalizar' : 'Próximo'

  const handleReview = () => {
    if (isReview) {
      alert('Formulário enviado com sucesso!')
    }
  }

  return (
    <div className={`flex ${initialForm ? 'justify-end' : 'justify-between'}`}>
      {!initialForm && !isReview && (
        <button
          type='button'
          onClick={prevStep}
          className='py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
        >
          Anterior
        </button>
      )}
      {isReview ? (
        <button
          type='submit'
          className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          onClick={handleReview}
        >
          {title}
        </button>
      ) : (
        <button
          type='button'
          className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          {title}
        </button>
      )}
    </div>
  )
}

export default NavigationButtons
