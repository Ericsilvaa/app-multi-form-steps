import { useFormContext } from '../../../context/useFormContext'
import PersonalAddress from './PersonalAddress'
import PersonalContactDetails from './PersonalContactDetails'
import PersonalInformation from './PersonalInformation'
import ProfessionInformation from './ProfessionInformation'
import ReviewAndConfirmation from './Review'

const FormSteps = () => {
  const { currentStep } = useFormContext()

  return (
    <div className=''>
      {currentStep === 1 && <PersonalInformation />}
      {currentStep === 2 && <ProfessionInformation />}
      {currentStep === 3 && <PersonalAddress />}
      {currentStep === 4 && <PersonalContactDetails />}
      {currentStep === 5 && <ReviewAndConfirmation />}
    </div>
  )
}

export default FormSteps
