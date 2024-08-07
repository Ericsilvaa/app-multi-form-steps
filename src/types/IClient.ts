export interface IPersonalInformation {
  fullName: string
  birthDate: string
  gender: 'male' | 'female' | 'other'
  email: string
}

export interface IAddress {
  street: string
  city: string
  state: string
  postalCode: string
  number: string
}

export interface IContactDetails {
  phoneNumber: string
  alternatePhoneNumber?: string
  contactPreferences: 'phone' | 'email' | 'sms'
}

export interface IProfession {
  occupation: string
  companyName: string
  yearsOfExperience?: string
  skills?: string[]
}

export interface IRegistration {
  id: number
  date_registrations: string
  date_initial: string
  date_finished: string
  conclusion: string
  isEdit: boolean
  isEditing: boolean
  employeeId: number
}

export interface IClient {
  id: number
  personalInformation: IPersonalInformation
  address: IAddress
  contactDetails: IContactDetails
  profession: IProfession
  registrations: IRegistration[]
}
