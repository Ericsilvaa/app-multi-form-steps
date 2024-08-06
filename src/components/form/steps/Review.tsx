import { useFormContext } from '../../../context/useFormContext'
import ReviewSection from '../../ReviewSection'

const ReviewAndConfirmation = () => {
  const { data: formData } = useFormContext()

  return (
    <div className='flex justify-center items-center bg-gray-100'>
      <div className='bg-white shadow-sm rounded-lg p-6 w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Revisão e Confirmação</h1>
        <ReviewSection
          title='Informações Pessoais'
          data={formData.personal_information}
        />
        <ReviewSection
          title='Informações Profissionais'
          data={formData.profession_information}
        />
        <ReviewSection title='Endereço' data={formData.address} />
        <ReviewSection
          title='Detalhes de Contato'
          data={formData.contact_details}
        />
      </div>
    </div>
  )
}

export default ReviewAndConfirmation
