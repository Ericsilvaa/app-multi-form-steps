import { ClientProvider } from '../../context/ClientContext'
import FormSteps from './steps/FormSteps'

const MultiStepForm = () => {
  return (
    <ClientProvider>
      <FormSteps />
    </ClientProvider>
  )
}

export default MultiStepForm
