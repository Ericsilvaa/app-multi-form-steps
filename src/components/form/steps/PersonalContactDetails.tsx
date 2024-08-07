import { SubmitHandler, useForm } from 'react-hook-form'
import { OPTIONS_CONTACT_PREFERENCES } from '../../../constants/form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import ButtonSubmit from '../../button/ButtonSubmit'
import TextInput from '../../input/TextInput'
import SelectInput from '../../select/Select'

type FormData = IDataForm['contact_details']

const PersonalContactDetails = () => {
  const { setFieldValue, nextStep, prevStep } = useFormContext()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log('data', formData)
    setFieldValue('contact_details', formData)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full p-6'>
      <div className='flex flex-col gap-4'>
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
      <div className={`flex justify-between`}>
        <button
          type='button'
          onClick={prevStep}
          className='py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
        >
          Anterior
        </button>
        <ButtonSubmit />
      </div>
    </form>
  )
}

export default PersonalContactDetails
