import {
  IAddress,
  IContactDetails,
  IPersonalInformation,
  IProfession
} from './IClient'

export type DataValuesType =
  | IPersonalInformation
  | IAddress
  | IContactDetails
  | IProfession

export type IDataForm = {
  personal_information: IPersonalInformation
  address: IAddress
  contact_details: IContactDetails
  profession: IProfession
}

export interface ILabelsFormKeys {
  fullName: string
  birthDate: string
  gender: string
  email: string
  occupation: string
  companyName: string
  yearsOfExperience: string
  skills: string
  street: string
  city: string
  state: string
  postalCode: string
  phoneNumber: string
  alternatePhoneNumber: string
  contactPreferences: string
  number: string
}

// Definindo os passos do formulário como enum
export enum Steps {
  PERSONAL_INFORMATION = 1,
  ADDRESS = 2,
  CONTACT_DETAILS = 3,
  PROFESSION_INFORMATION = 4,
  REVIEW = 5
}

export type CurrentStepsType = keyof typeof Steps
