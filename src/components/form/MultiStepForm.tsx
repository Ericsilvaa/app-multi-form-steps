import { ClientProvider } from '../../context/ClientContext'
import ProgressBar from './ProgressBar'
import FormSteps from './steps/FormSteps'

const MultiStepForm = () => {
  return (
    <ClientProvider>
      <div className='container flex flex-col items-center justify-center bg-gray-100 mt-5 mx-auto rounded-xl py-4'>
        <ProgressBar />
        <FormSteps />
      </div>
    </ClientProvider>
  )
}

export default MultiStepForm
