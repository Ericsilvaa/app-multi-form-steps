import { SubmitHandler, useForm } from 'react-hook-form'
import { OPTIONS_GENRER } from '../../../constants/form'
import { useFormContext } from '../../../context/useFormContext'
import TextInput from '../../input/TextInput'
import SelectInput from '../../select/Select'
import { DataForm } from '../../types/TForm'

type FormData = DataForm[`personal_information`]

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
      className='max-w-md mx-auto p-4 bg-white shadow-sm rounded-md'
    >
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
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Salvar
      </button>
    </form>
  )
}

export default PersonalInformation
