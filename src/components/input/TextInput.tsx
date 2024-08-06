import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

interface TextInputProps {
  label?: string
  width?: string
  helperText?: string | null
  errors?: FieldErrors<FieldValues>
  warningLimitMessage?: string
  characterCounter?: number
  handleChange?: () => void
}

type Props = TextInputProps & InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, id, type, errors, ...props }, ref) => {
    return (
      <div className='mb-4'>
        <>
          {label && (
            <label
              htmlFor={id}
              className='block text-sm font-medium text-gray-700'
            >
              {label}
            </label>
          )}

          <input
            id={id}
            type={type || 'text'}
            ref={ref}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            {...props}
          />
        </>
        <span>
          {errors && (
            <span className='text-red-500 text-sm'>
              {errors.message?.toString() || 'Este campo é obrigatório'}
            </span>
          )}
        </span>
      </div>
    )
  }
)

export default TextInput
