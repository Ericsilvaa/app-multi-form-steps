/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { LABELMAPPING } from '../../constants/form'
import { DataValuesType } from '../../types/TForm'

type Props = {
  title: string
  data: DataValuesType
  onEdit: (field: string, value: any) => void
}

const ReviewSection: React.FC<Props> = ({ title, data, onEdit }) => {
  const [editingField, setEditingField] = useState<string | null>(null)
  const [fieldValue, setFieldValue] = useState<any>('')

  const handleEditClick = (field: string, value: any) => {
    setEditingField(field)
    setFieldValue(value)
  }

  const handleSaveClick = (field: string) => {
    onEdit(field, fieldValue)
    setEditingField(null)
  }

  return (
    <div className='mb-6 p-4 border rounded-lg shadow-sm bg-white'>
      <h2 className='text-2xl font-semibold mb-4 text-gray-700'>{title}</h2>
      <div className='space-y-3'>
        {Object.entries(data).map(([label, value]) => (
          <div key={label} className='flex justify-between items-center'>
            <span className='font-medium text-gray-600'>
              {LABELMAPPING[label as string] ||
                label.replace(/([A-Z])/g, ' $1')}
              :
            </span>
            {editingField === label ? (
              <div className='flex items-center'>
                <input
                  type='text'
                  value={fieldValue}
                  onChange={(e) => setFieldValue(e.target.value)}
                  className='border p-1 rounded'
                />
                <button
                  onClick={() => handleSaveClick(label)}
                  className='ml-2 py-1 px-3 bg-blue-500 text-white rounded-md'
                >
                  Salvar
                </button>
              </div>
            ) : (
              <div className='flex items-center'>
                <span className='text-gray-800'>{value || '---'}</span>
                <button
                  onClick={() => handleEditClick(label, value)}
                  className='ml-2 py-1 px-3 bg-gray-300 text-gray-700 rounded-md'
                >
                  Editar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection
