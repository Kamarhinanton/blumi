import React, { FC, useEffect, useState } from 'react'
import TextField from '@/ui/TextField/TextField'
import ButtonSecondary from '@/ui/ButtonSecondary/ButtonSecondary'
import Link from 'next/link'
import routes from '@/utils/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, Resolver, useForm } from 'react-hook-form'
import { generateValidationSchema } from '@/modules/SignUpPartner/ui/HeroSignUp/validationSchema'
import FormPopup from '@/components/HeroSignUp/FormPopup/FormPopup'
import { AnimatePresence } from 'framer-motion'
import { UserField, UserType } from '@/utils/handleTypes'
import ControlField from '@/ui/ControlField/ControlField'
import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'

import styles from './BodyForm.module.scss'
import classNames from 'classnames'

type BodyFormType = {
  userType: UserType
  userFields: UserField[]
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber?: string
  displayName?: string
  [key: string]: string | string[] | undefined
}

export const isUserFieldsShouldVisible = (field: UserField, id: string) =>
  (field.userTypeConfig?.limitToUserTypeIds &&
    field.userTypeConfig.userTypeIds?.includes(id)) ||
  !field.userTypeConfig?.limitToUserTypeIds

const BodyForm: FC<BodyFormType> = ({ userType, userFields }) => {
  const [sending, setSending] = useState(false)
  const [isVisible, setIsVisible] = useState({
    visible: false,
    message: '',
  })

  useEffect(() => console.log(userFields), [])

  const validationSchema = generateValidationSchema(userFields, userType)
  const isPhoneFieldShouldVisible =
    userType.phoneNumberSettings?.displayInSignUp &&
    userType.defaultUserFields.phoneNumber

  const isDisplayFieldShouldVisible =
    userType.displayNameSettings?.displayInSignUp &&
    userType.defaultUserFields.displayName

  const defaultValues: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    ...(isPhoneFieldShouldVisible && { phoneNumber: '' }),
    ...(isDisplayFieldShouldVisible && { displayName: '' }),
    ...userFields
      .filter((field) => isUserFieldsShouldVisible(field, userType.id))
      .reduce((acc: Partial<FormData>, userField) => {
        if (userField.key) {
          switch (userField.schemaType) {
            case 'text':
            case 'enum':
              acc[userField.key] = ''
              break

            case 'multi-enum':
              acc[userField.key] = []
              break

            default:
              break
          }
        }
        return acc
      }, {}),
  }

  console.log('dv', defaultValues)
  console.log('vs', validationSchema)

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<Partial<FormData>>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<Partial<FormData>>,
  })

  const watchedFields = userFields
    .filter(
      (field) =>
        field.schemaType === 'enum' || field.schemaType === 'multi-enum',
    )
    .map((field) => ({
      key: field.key,
      value: watch(field.key, defaultValues[field.key]),
    }))

  const watchedFieldsMap = Object.fromEntries(
    watchedFields.map(({ key, value }) => [key, value]),
  )

  const resetForm = (message: string) => {
    reset(defaultValues)
    setIsVisible({
      visible: true,
      message: message,
    })
  }

  const onSubmit = async (data: Partial<FormData>) => {
    console.log(data)
    setSending(true)
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      displayName,
      ...userFields
    } = data

    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          displayName,
          userType: userType.id,
          phoneNumber,
          ...userFields,
        }),
      })

      if (!response.ok) {
        resetForm('Oops! There was an error creating your account...')
        setSending(false)
        return
      }

      resetForm(
        'Account successfully created! Please check your email and confirm your registration!',
      )
    } catch (error) {
      console.error(error)
      resetForm('Oops! There was an error creating your account...')
    }
    setSending(false)
  }

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['form__input-wrapper']}>
          <Controller
            control={control}
            name={'firstName'}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className={styles['form__input-wrapper_input']}
                  placeholder={'First name'}
                  label={'Make sure it matches your government ID.'}
                  error={errors['firstName']?.message}
                />
              )
            }}
          />
          <Controller
            control={control}
            name={'lastName'}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className={styles['form__input-wrapper_input']}
                  placeholder={'Last name'}
                  error={errors['lastName']?.message}
                />
              )
            }}
          />
          <Controller
            control={control}
            name={'email'}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className={styles['form__input-wrapper_input']}
                  placeholder={'Email'}
                  type={'email'}
                  label={'We’ll email you confirmation and receipts.'}
                  error={errors['email']?.message}
                />
              )
            }}
          />
          {isPhoneFieldShouldVisible && (
            <Controller
              control={control}
              name={'phoneNumber'}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className={styles['form__input-wrapper_input']}
                    placeholder={'Phone Number'}
                    type={'text'}
                    error={errors['phoneNumber']?.message}
                  />
                )
              }}
            />
          )}
          {isDisplayFieldShouldVisible && (
            <Controller
              control={control}
              name={'displayName'}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    className={styles['form__input-wrapper_input']}
                    placeholder={'Display Name'}
                    type={'text'}
                    error={errors['displayName']?.message}
                  />
                )
              }}
            />
          )}
          <Controller
            control={control}
            name={'password'}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className={styles['form__input-wrapper_input']}
                  placeholder={'Password'}
                  type={'password'}
                  password
                  error={errors['password']?.message}
                />
              )
            }}
          />
          {userFields
            .filter((field) => isUserFieldsShouldVisible(field, userType.id))
            .map((fieldInput, index) => {
              const { key, schemaType, enumOptions } = fieldInput
              switch (schemaType) {
                case 'multi-enum':
                  return (
                    <div
                      key={`${key + index}`}
                      className={classNames(
                        styles['controls'],
                        styles['form__input-wrapper_input'],
                      )}
                    >
                      {enumOptions?.map(({ option, label }) => (
                        <Controller
                          control={control}
                          key={option}
                          name={fieldInput.key}
                          render={({ field }) => (
                            <ControlField
                              {...field}
                              type={'checkbox'}
                              value={option}
                              title={label}
                              watcher={watchedFieldsMap[key]}
                            />
                          )}
                        />
                      ))}
                      <ErrorMessage
                        label={fieldInput.label}
                        error={errors[fieldInput.key]?.message}
                        className={styles['controls__errorMessage']}
                      />
                    </div>
                  )

                case 'enum':
                  return (
                    <div
                      key={`${key + index}`}
                      className={classNames(
                        styles['controls'],
                        styles['form__input-wrapper_input'],
                      )}
                    >
                      {enumOptions?.map(({ option, label }) => (
                        <Controller
                          control={control}
                          key={option}
                          name={fieldInput.key}
                          render={({ field }) => (
                            <ControlField
                              {...field}
                              type={'radio'}
                              name={fieldInput.key}
                              value={option}
                              title={label}
                              watcher={watchedFieldsMap[key]}
                            />
                          )}
                        />
                      ))}
                      <ErrorMessage
                        label={fieldInput.label}
                        error={errors[fieldInput.key]?.message}
                        className={styles['controls__errorMessage']}
                      />
                    </div>
                  )

                case 'text':
                  return (
                    <Controller
                      control={control}
                      key={`${key + index}`}
                      name={key}
                      render={({ field }) => {
                        return (
                          <TextField
                            {...field}
                            value={field.value as string}
                            onChange={(e) => field.onChange(e.target.value)}
                            className={styles['form__input-wrapper_input']}
                            placeholder={fieldInput.label}
                            error={errors[fieldInput.key]?.message}
                          />
                        )
                      }}
                    />
                  )

                default:
                  return null
              }
            })}
        </div>
        <p className={styles['form__bottom-subtext']}>
          By selecting <strong>Agree and continue</strong>, I agree to Blumi’s{' '}
          <Link className={'border-link'} href={'/'}>
            Terms of Service
          </Link>
          ,
          <Link className={'border-link'} href={'/'}>
            Payments Terms of Service{' '}
          </Link>
          and{' '}
          <Link className={'border-link'} href={'/'}>
            Nondiscrimination Policy
          </Link>{' '}
          and acknowledge the{' '}
          <Link className={'border-link'} href={'/'}>
            Privacy Policy
          </Link>
          .
        </p>
        <ButtonSecondary
          type="submit"
          className={styles['form__button']}
          variant={'pink'}
          disabled={sending}
        >
          Agree and Continue
        </ButtonSecondary>
        <p className={styles['form__bottom-text']}>
          You’re a model?{' '}
          <Link className={'border-link'} href={routes.public.signUpCustomer}>
            Sign up as a Model
          </Link>
        </p>
      </form>
      <AnimatePresence>
        {isVisible.visible && (
          <FormPopup setIsVisible={setIsVisible} message={isVisible.message} />
        )}
      </AnimatePresence>
    </>
  )
}

export default BodyForm
