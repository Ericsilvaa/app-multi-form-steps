export const STEPS = [
  { step: 1, name: 'Informações Pessoais' },
  { step: 2, name: 'Informações Profissionais' },
  { step: 3, name: 'Endereço' },
  { step: 4, name: 'Detalhes de Contato' },
  { step: 5, name: 'Revisão e Confirmação' }
]

export const OPTIONS_GENRER = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
]

export const OPTIONS_CONTACT_PREFERENCES = [
  { value: 'phone', label: 'Phone' },
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'SMS' }
]

export const LABELMAPPING: Record<string, string> = {
  fullName: 'Nome Completo',
  birthDate: 'Data de Nascimento',
  gender: 'Gênero',
  email: 'Email',
  occupation: 'Ocupação',
  companyName: 'Empresa',
  yearsOfExperience: 'Anos de Experiência',
  skills: 'Habilidades',
  street: 'Rua',
  city: 'Cidade',
  state: 'Estado',
  numero: 'Número',
  postalCode: 'Código Postal',
  phoneNumber: 'Número de Telefone',
  alternatePhoneNumber: 'Telefone Alternativo',
  contactPreferences: 'Preferências de Contato'
}
