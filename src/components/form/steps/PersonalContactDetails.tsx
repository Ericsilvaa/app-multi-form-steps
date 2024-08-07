import { SubmitHandler, useForm } from 'react-hook-form'
import { OPTIONS_CONTACT_PREFERENCES } from '../../../constants/form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import NavigationButtons from '../../button/NavigationButtons'
import TextInput from '../../input/TextInput'
import SelectInput from '../../select/Select'

type FormData = IDataForm['contact_details']

const PersonalContactDetails = () => {
  const { setFieldValue, nextStep } = useFormContext()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log('data', formData)
    setFieldValue('contact_details', formData)
    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'
    >
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <TextInput
          id='phoneNumber'
          label='Phone Number'
          {...register('phoneNumber')}
        />
        <TextInput
          id='alternatePhoneNumber'
          label='Alternate Phone Number'
          {...register('alternatePhoneNumber')}
        />
        <SelectInput
          id='contactPreferences'
          label='Contact Preferences'
          options={OPTIONS_CONTACT_PREFERENCES}
          {...register('contactPreferences')}
        />
      </div>
      <NavigationButtons />
    </form>
  )
}

export default PersonalContactDetails
