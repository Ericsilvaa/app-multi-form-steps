import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../context/useFormContext'
import TextInput from '../../input/TextInput'
import { DataForm } from '../../types/TForm'
type FormData = DataForm[`profession_information`] & { skills: string }

const ProfessionInformation = () => {
  const { setFieldValue, nextStep } = useFormContext()

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
    setFieldValue('profession_information', dataValue)

    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'
    >
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

      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Next
      </button>
    </form>
  )
}

export default ProfessionInformation
