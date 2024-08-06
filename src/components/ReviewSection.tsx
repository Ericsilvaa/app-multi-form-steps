import { LABELMAPPING } from '../constants/form'
import { DataValuesType } from './types/TForm'

type Props = {
  title: string
  data: DataValuesType
}

const ReviewSection = ({ title, data }: Props) => {
  return (
    <div className='mb-6 p-4 border rounded-lg shadow-sm bg-white'>
      <h2 className='text-2xl font-semibold mb-4 text-gray-700'>{title}</h2>
      <div className='space-y-3'>
        {Object.entries(data).map(([label, value]) => (
          <div key={label} className='flex justify-between'>
            <span className='font-medium text-gray-600'>
              {LABELMAPPING[label as string] ||
                label.replace(/([A-Z])/g, ' $1')}
              :
            </span>
            <span className='text-gray-800'>{value || '---'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection
