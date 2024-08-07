import { ClientProvider } from '../../context/ClientContext'
import FormSteps from './steps/FormSteps'

const MultiStepForm = () => {
  return (
    <ClientProvider>
      <div className=''>
        <FormSteps />
      </div>
    </ClientProvider>
  )
}

export default MultiStepForm
