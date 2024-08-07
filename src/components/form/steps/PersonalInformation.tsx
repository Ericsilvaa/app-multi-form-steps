import { SubmitHandler, useForm } from 'react-hook-form'
import { OPTIONS_GENRER } from '../../../constants/form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import ButtonSubmit from '../../button/ButtonSubmit'
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
    <form onSubmit={handleSubmit(onSubmit)} className='w-full p-6'>
      <div className='flex flex-col gap-4'>
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
      <ButtonSubmit />
    </form>
  )
}

export default PersonalInformation
