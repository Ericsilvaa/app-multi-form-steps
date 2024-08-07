type Props = {
  title?: string
}

const ButtonSubmit = ({ title = 'Próximo' }: Props) => {
  return (
    <button
      type='submit'
      className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
    >
      {title}
    </button>
  )
}

export default ButtonSubmit
