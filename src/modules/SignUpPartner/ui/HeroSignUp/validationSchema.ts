import * as Yup from 'yup'
import { UserField, UserType } from '@/utils/handleTypes'
import { isUserFieldsShouldVisible } from '@/components/HeroSignUp/BodyForm/BodyForm'

type ValidationSchema = {
  firstName: Yup.StringSchema
  lastName: Yup.StringSchema
  email: Yup.StringSchema
  password: Yup.StringSchema
  [key: string]: Yup.AnySchema
}

export const generateValidationSchema = (
  userFields: UserField[],
  userType: UserType,
) => {
  const isPhoneFieldShouldVisible =
    userType.phoneNumberSettings?.displayInSignUp &&
    userType.defaultUserFields.phoneNumber

  const isDisplayFieldShouldVisible =
    userType.displayNameSettings?.displayInSignUp &&
    userType.defaultUserFields.displayName

  const schema: ValidationSchema = {
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required'),
  }

  if (isPhoneFieldShouldVisible) {
    schema.phoneNumber = Yup.string()
      .required('Phone is required')
      .matches(/^\d+$/, 'Phone number must contain only digits')
  }

  if (isDisplayFieldShouldVisible) {
    schema.displayName = Yup.string().required('Field is required')
  }

  userFields
    .filter((field) => isUserFieldsShouldVisible(field, userType.id))
    .forEach((field) => {
      if (field.key) {
        switch (field.schemaType) {
          case 'text':
            schema[field.key] = Yup.string().required(
              `${field.label} is required`,
            )
            break
          case 'enum':
            schema[field.key] = Yup.string().required(
              `${field.label} is required`,
            )
            break
          case 'multi-enum':
            schema[field.key] = Yup.array()
              .of(Yup.string())
              .min(1, 'Please select at least one option')
            break
          default:
            break
        }
      }
    })

  return Yup.object().shape(schema)
}
