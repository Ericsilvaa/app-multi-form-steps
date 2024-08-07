import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import ButtonSubmit from '../../button/ButtonSubmit'
import TextInput from '../../input/TextInput'

type FormData = IDataForm['address']

const PersonalAddress = () => {
  const { setFieldValue, nextStep, prevStep } = useFormContext()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log('data', formData)
    setFieldValue('address', formData)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full p-6'>
      <div className='flex flex-col gap-4'>
        <TextInput id='street' label='Street' {...register('street')} />
        <TextInput id='number' label='Number' {...register('number')} />
        <TextInput id='city' label='City' {...register('city')} />
        <TextInput id='state' label='State' {...register('state')} />
        <TextInput id='zipCode' label='Zip Code' {...register('postalCode')} />
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

export default PersonalAddress
