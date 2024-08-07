import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import ButtonSubmit from '../../button/ButtonSubmit'
import TextInput from '../../input/TextInput'

type FormData = IDataForm['profession'] & { skills: string }

const ProfessionInformation = () => {
  const { setFieldValue, nextStep, prevStep } = useFormContext()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const skills = formData.skills
      ? (formData.skills as string).split(', ')
      : []

    const dataValue = {
      ...formData,
      skills
    }

    console.log('data', formData)
    setFieldValue('profession', dataValue)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full p-6'>
      <div className='flex flex-col gap-4'>
        <TextInput
          id='occupation'
          label='Occupation'
          {...register('occupation')}
        />
        <TextInput
          id='companyName'
          label='Company'
          {...register('companyName')}
        />
        <TextInput
          id='yearsOfExperience'
          label='Years of Experience'
          {...register('yearsOfExperience')}
        />
        <TextInput id='skills' label='Skills' {...register('skills')} />
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

export default ProfessionInformation
