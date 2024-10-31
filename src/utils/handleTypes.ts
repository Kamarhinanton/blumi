export type QueryResultUserTypes = {
  data: {
    userTypes: UserType[]
  }
}

export type UserType = {
  id: 'service-provider' | 'customer'
  label: string
  displayNameSettings?: {
    displayInSignUp?: boolean
    required?: boolean
  }
  phoneNumberSettings?: {
    displayInSignUp?: boolean
    required?: boolean
  }
}
