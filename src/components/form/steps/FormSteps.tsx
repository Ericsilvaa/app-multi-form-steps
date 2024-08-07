import { useFormContext } from '../../../hooks/useFormContext'
import FormContainer from '../../containers/FormContainer'
import ReviewAndConfirmation from '../../review/Review'
import ProgressBar from '../ProgressBar'
import PersonalAddress from './PersonalAddress'
import PersonalContactDetails from './PersonalContactDetails'
import PersonalInformation from './PersonalInformation'
import ProfessionInformation from './ProfessionInformation'

const FormSteps = () => {
  const { currentStep } = useFormContext()

  return (
    <FormContainer>
      <ProgressBar />
      {currentStep === 1 && <PersonalInformation />}
      {currentStep === 2 && <ProfessionInformation />}
      {currentStep === 3 && <PersonalAddress />}
      {currentStep === 4 && <PersonalContactDetails />}
      {currentStep === 5 && <ReviewAndConfirmation />}
    </FormContainer>
  )
}

export default FormSteps
