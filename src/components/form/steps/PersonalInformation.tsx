import { SubmitHandler, useForm } from 'react-hook-form'
import { OPTIONS_GENRER } from '../../../constants/form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import NavigationButtons from '../../button/NavigationButtons'
import TextInput from '../../input/TextInput'
import SelectInput from '../../select/Select'

type FormData = IDataForm['personal_information']

const PersonalInformation = () => {
  const { setFieldValue, nextStep } = useFormContext()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log('data', formData)
    setFieldValue('personal_information', formData)
    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'
    >
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <TextInput id='fullName' label='Full Name' {...register('fullName')} />
        <TextInput id='email' label='Email' {...register('email')} />
        <TextInput
          id='birthDate'
          type='date'
          label='Birth Date'
          {...register('birthDate')}
        />
        <SelectInput
          id='gender'
          label='Gender'
          options={OPTIONS_GENRER}
          {...register('gender')}
        />
      </div>
      <NavigationButtons />
    </form>
  )
}

export default PersonalInformation
