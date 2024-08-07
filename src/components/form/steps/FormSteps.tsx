import { useFormContext } from '../../../hooks/useFormContext'
import FormContainer from '../../containers/FormContainer'
import ReviewAndConfirmation from '../../review/Review'
import PersonalAddress from './PersonalAddress'
import PersonalContactDetails from './PersonalContactDetails'
import PersonalInformation from './PersonalInformation'
import ProfessionInformation from './ProfessionInformation'

const FormSteps = () => {
  const { currentStep, data } = useFormContext()

  return (
    <FormContainer>
      {currentStep === 1 && <PersonalInformation />}
      {currentStep === 2 && <ProfessionInformation />}
      {currentStep === 3 && <PersonalAddress />}
      {currentStep === 4 && <PersonalContactDetails />}
      {currentStep === 5 && <ReviewAndConfirmation />}
      {JSON.stringify(data)}
    </FormContainer>
  )
}

export default FormSteps
