import { SubmitHandler, useForm } from 'react-hook-form'
import { OPTIONS_CONTACT_PREFERENCES } from '../../../constants/form'
import { useFormContext } from '../../../context/useFormContext'
import TextInput from '../../input/TextInput'
import SelectInput from '../../select/Select'
import { DataForm } from '../../types/TForm'

type FormData = DataForm[`contact_details`]

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
      className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'
    >
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

      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Next
      </button>
    </form>
  )
}

export default PersonalContactDetails
