import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phoneNumber: Yup.lazy((value) => {
    if (value !== undefined) {
      return Yup.string()
        .required('Phone is required')
        .matches(/^\d+$/, 'Phone number must contain only digits')
    }
    return Yup.string().notRequired()
  }),
  displayName: Yup.lazy((value) => {
    if (value !== undefined) {
      return Yup.string().required('Display name is required')
    }
    return Yup.string().notRequired()
  }),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string().required('Password is required'),
})
