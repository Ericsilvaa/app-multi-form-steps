import { useFormContext } from '../../hooks/useFormContext'
import { DataValuesType } from '../../types/TForm'
import NavigationButtons from '../button/NavigationButtons'

const ReviewAndConfirmation = () => {
  const { data: formData, setFieldValue } = useFormContext()
  console.log('🚀 ~ ReviewAndConfirmation ~ data:', formData)

  const handleEdit = (
    section: keyof typeof formData,
    field: string,
    value: DataValuesType
  ) => {
    setFieldValue(section, { ...formData[section], [field]: value })
  }

  return (
    <div className='flex justify-center items-center bg-gray-100 mt-4'>
      <div className='bg-white shadow-sm rounded-lg p-6 w-full max-w-lg'>
        <h1 className='text-2xl font-bold mb-4'>Revisão e Confirmação</h1>
        {/* <ReviewSection
          title='personal_information'
          data={formData.personal_information}
          onEdit={(field, value) =>
            handleEdit('personal_information', field, value)
          }
        />
        <ReviewSection
          title='profession'
          data={formData.profession}
          onEdit={(field, value) => handleEdit('profession', field, value)}
        />
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
        <NavigationButtons />
      </div>
    </div>
  )
}

export default ReviewAndConfirmation
