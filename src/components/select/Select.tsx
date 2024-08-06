import { SelectHTMLAttributes, forwardRef } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

interface SelectInputProps {
  label?: string
  width?: string
  helperText?: string | null
  errors?: FieldErrors<FieldValues>
  warningLimitMessage?: string
  options: { value: string; label: string }[]
}

type Props = SelectInputProps & SelectHTMLAttributes<HTMLSelectElement>

const SelectInput = forwardRef<HTMLSelectElement, Props>(
  ({ label, id, errors, options, ...props }, ref) => {
    return (
      <div className='mb-4'>
        {label && (
          <label
            htmlFor={id}
            className='block text-sm font-medium text-gray-700'
          >
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
            errors && 'border-red-500'
          }`}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

export default SelectInput
