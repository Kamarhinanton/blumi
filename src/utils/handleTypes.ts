export type QueryResultUserTypes = {
  data: {
    userTypes: UserType[]
  }
}

export type UserType = {
  id: 'service-provider' | 'customer'
  label: string
  defaultUserFields: {
    phoneNumber?: boolean
    displayName?: boolean
  }
  phoneNumberSettings?: {
    displayInSignUp?: boolean
  }
  displayNameSettings?: {
    displayInSignUp?: boolean
  }
}
