import { STEPS } from '../../constants/form'
import { useFormContext } from '../../hooks/useFormContext'

const ProgressBar = () => {
  const { currentStep } = useFormContext()

  if (currentStep === 5) {
    return null
  }

  return (
    <div className='mb-4'>
      <h1 className='text-xl font-bold mb-4'>Etapa {currentStep} de 5</h1>
      <div className='relative'>
        <div className='flex items-center justify-between'>
          {STEPS.map(({ step, name }) => (
            <div key={step} className='flex items-center space-x-4'>
              <div className='relative flex flex-col items-center'>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    step <= currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  {step}
                </div>
                <span className='bg-gray-200 text-xs py-1 px-2 rounded-md'>
                  {name}
                </span>
              </div>
              {step < STEPS.length && (
                <div
                  className={`h-1 w-16 ${
                    step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
