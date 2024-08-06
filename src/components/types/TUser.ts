export interface PersonalInformation {
  fullName: string
  birthDate: string
  gender: 'male' | 'female' | 'other'
  email: string
}

export interface AddresType {
  street: string
  city: string
  state: string
  postalCode: string
  number: string
}

export interface ContactDetailsType {
  phoneNumber: string
  alternatePhoneNumber?: string
  contactPreferences: 'phone' | 'email' | 'sms'
}

export interface ProfessionType {
  occupation: string
  companyName: string
  yearsOfExperience?: string
  skills?: string[]
}
