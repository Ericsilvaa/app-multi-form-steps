import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../context/useFormContext'
import TextInput from '../../input/TextInput'
import { DataForm } from '../../types/TForm'

type FormData = DataForm[`address`]

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
      className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'
    >
      <TextInput id='street' label='Street' {...register('street')} />
      <TextInput id='number' label='Number' {...register('number')} />
      <TextInput id='city' label='City' {...register('city')} />
      <TextInput id='state' label='State' {...register('state')} />
      <TextInput id='zipCode' label='Zip Code' {...register('postalCode')} />

      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Next
      </button>
    </form>
  )
}

export default PersonalAddress
