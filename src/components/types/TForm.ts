/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AddresType,
  ContactDetailsType,
  PersonalInformation,
  ProfessionType
} from './TUser'

export type DataForm = {
  personal_information: PersonalInformation
  profession_information: ProfessionType
  address: AddresType
  contact_details: ContactDetailsType
}

export type DataValuesType =
  | PersonalInformation
  | AddresType
  | ContactDetailsType
  | ProfessionType

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

// enums
export enum Steps {
  PERSONAL_INFORMATION = 1,
  ADDRESS = 2,
  CONTACT_DETAILS = 3,
  PROFESSION_INFORMATION = 4,
  REVIEW = 5
}

export type CurrentStepsType = keyof typeof Steps
