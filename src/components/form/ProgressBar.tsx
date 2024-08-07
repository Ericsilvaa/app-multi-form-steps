import { STEPS } from '../../constants/form'
import { useFormContext } from '../../hooks/useFormContext'

const ProgressBar = () => {
  const { currentStep } = useFormContext()

  if (currentStep === 5) {
    return null
  }

  return (
    <div className='px-4 bg-red-400'>
      <h1 className='text-sm font-bold mb-4'>Etapa {currentStep} de 5</h1>
      <div className='flex justify-between'>
        {STEPS.map(({ step, name }) => (
          <div
            key={step}
            className='flex flex-col justify-between items-center'
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                step <= currentStep ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              {step}
            </div>
            <span className='relative text-[10px]'>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
