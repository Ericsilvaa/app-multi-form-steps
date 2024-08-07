import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormContext } from '../../../hooks/useFormContext'
import { IDataForm } from '../../../types/TForm'
import NavigationButtons from '../../button/NavigationButtons'
import TextInput from '../../input/TextInput'

type FormData = IDataForm['profession'] & { skills: string }

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
    setFieldValue('profession', dataValue)
    nextStep()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'
    >
      <div className='grid grid-cols-2 gap-4 mb-4'>
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
      <NavigationButtons />
    </form>
  )
}

export default ProfessionInformation
