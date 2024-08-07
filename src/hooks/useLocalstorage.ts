/* eslint-disable @typescript-eslint/no-unused-vars */
type LocalstorageKeys = 'submissionHistory' | 'formValues'

export const useLocalstorage = (key: LocalstorageKeys) => {
  const getItem = () => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : undefined
    } catch (error) {
      console.error(error)
    }
  }

  const setItem = (value: unknown) => {
    try {
      const localValue = JSON.stringify(value)
      localStorage.setItem(key, localValue)
    } catch (error) {
      console.error(error)
    }
  }

  return { getItem, setItem }
}
