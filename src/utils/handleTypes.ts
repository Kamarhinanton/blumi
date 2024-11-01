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

export type QueryResultUserFields = {
  data: {
    userFields: UserField[]
  }
}

export type UserField = {
  enumOptions?: {
    label: string
    option: string
  }[]
  key: string
  label: string
  saveConfig?: {
    displayInSignUp?: boolean
    required?: boolean
  }
  showConfig?: {
    unselectedOptions?: boolean
  }
  schemaType?: string
  scope?: string
  userTypeConfig?: {
    limitToUserTypeIds?: boolean
    userTypeIds?: string[]
  }
}
