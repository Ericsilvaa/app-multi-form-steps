import { useFormContext } from '../../hooks/useFormContext'
import ButtonSubmit from '../button/ButtonSubmit'
import ReviewSection from './ReviewSection'

const ReviewAndConfirmation = () => {
  const { data: formData } = useFormContext()
  console.log('🚀 ~ ReviewAndConfirmation ~ data:', formData)

  return (
    <div className='flex justify-center items-center bg-gray-100 mt-4'>
      <div className='bg-white shadow-sm rounded-lg p-6 w-full max-w-lg'>
        <h1 className='text-2xl font-bold mb-4'>Revisão e Confirmação</h1>
        <ReviewSection
          title='Informações Pessoais'
          fieldName='personal_information'
          data={formData.personal_information}
        />

        <ReviewSection
          title='Profissão'
          fieldName='profession'
          data={formData.profession}
        />
        {/*
        <ReviewSection
          title='address'
          data={formData.address}
          onEdit={(field, value) => handleEdit('address', field, value)}
        />
        <ReviewSection
          title='contact_details'
          data={formData.contact_details}
          onEdit={(field, value) => handleEdit('contact_details', field, value)}
        /> */}
        <ButtonSubmit title='Finalizar' />
      </div>
    </div>
  )
}

export default ReviewAndConfirmation
