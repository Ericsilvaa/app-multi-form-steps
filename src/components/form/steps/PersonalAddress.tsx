import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import NavigationButtons from '../../button/NavigationButtons'
import TextInput from '../../input/TextInput'

type FormData = IDataForm['address']

const PersonalAddress = () => {
  const { setFieldValue, nextStep } = useFormContext()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log('data', formData)
    setFieldValue('address', formData)
    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'
    >
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <TextInput id='street' label='Street' {...register('street')} />
        <TextInput id='number' label='Number' {...register('number')} />
        <TextInput id='city' label='City' {...register('city')} />
        <TextInput id='state' label='State' {...register('state')} />
        <TextInput id='zipCode' label='Zip Code' {...register('postalCode')} />
      </div>
      <NavigationButtons />
    </form>
  )
}

export default PersonalAddress
