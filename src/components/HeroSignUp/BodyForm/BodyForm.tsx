import React, { FC, useEffect, useState } from 'react'
import TextField from '@/ui/TextField/TextField'
import ButtonSecondary from '@/ui/ButtonSecondary/ButtonSecondary'
import Link from 'next/link'
import routes from '@/utils/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, Resolver, useForm } from 'react-hook-form'
import { validationSchema } from '@/modules/SignUpPartner/ui/HeroSignUp/validationSchema'
import FormPopup from '@/components/HeroSignUp/FormPopup/FormPopup'
import { AnimatePresence } from 'framer-motion'
import { UserField, UserType } from '@/utils/handleTypes'
import ControlField from '@/ui/ControlField/ControlField'
import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'

import styles from './BodyForm.module.scss'

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
  test1?: string
  test2?: string[]
  test3?: string
}

const BodyForm: FC<BodyFormType> = ({ userType, userFields }) => {
  const [sending, setSending] = useState(false)
  const [isVisible, setIsVisible] = useState({
    visible: false,
    message: '',
  })

  useEffect(() => {
    console.log(userFields)
  }, [])

  const isPhoneFieldShouldVisible =
    userType.phoneNumberSettings?.displayInSignUp &&
    userType.defaultUserFields.phoneNumber

  const isDisplayFieldShouldVisible =
    userType.displayNameSettings?.displayInSignUp &&
    userType.defaultUserFields.displayName

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    ...(isPhoneFieldShouldVisible && { phoneNumber: '' }),
    ...(isDisplayFieldShouldVisible && { displayName: '' }),
    test1: '',
    test2: [],
    test3: '',
  }
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<FormData>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<FormData>,
  })

  const watcherTest1 = watch('test1', defaultValues.test1)
  const watcherTest2 = watch('test2', defaultValues.test2)

  const resetForm = (message: string) => {
    reset(defaultValues)
    setIsVisible({
      visible: true,
      message: message,
    })
  }

  const onSubmit = async (data: FormData) => {
    setSending(true)
    const { firstName, lastName, email, password, phoneNumber, displayName } =
      data

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
        </div>
        {userFields
          .filter(
            (field) =>
              (field.userTypeConfig?.limitToUserTypeIds &&
                field.userTypeConfig.userTypeIds?.includes(userType.id)) ||
              !field.userTypeConfig?.limitToUserTypeIds,
          )
          .map((fieldInput) => {
            switch (fieldInput.schemaType) {
              case 'multi-enum':
                return (
                  <div
                    key={fieldInput.key}
                    className={styles['form__controls']}
                  >
                    {fieldInput.enumOptions?.map((item) => (
                      <Controller
                        control={control}
                        key={item.option}
                        name={'test2'}
                        render={({ field }) => (
                          <ControlField
                            {...field}
                            type={'checkbox'}
                            value={item.option}
                            title={item.label}
                            watcher={watcherTest2}
                          />
                        )}
                      />
                    ))}
                    <ErrorMessage
                      label={fieldInput.label}
                      error={errors['test2']?.message}
                    />
                  </div>
                )

              case 'enum':
                return (
                  <div
                    key={fieldInput.key}
                    className={styles['form__controls']}
                  >
                    {fieldInput.enumOptions?.map((item) => (
                      <Controller
                        control={control}
                        key={item.option}
                        name={'test1'}
                        render={({ field }) => (
                          <ControlField
                            {...field}
                            type={'radio'}
                            name={'1'}
                            value={item.option}
                            title={item.label}
                            watcher={watcherTest1}
                          />
                        )}
                      />
                    ))}
                    <ErrorMessage
                      label={fieldInput.label}
                      error={errors['test1']?.message}
                    />
                  </div>
                )

              case 'text':
                return (
                  <Controller
                    control={control}
                    name={'test3'}
                    render={({ field }) => {
                      return (
                        <TextField
                          {...field}
                          className={styles['form__input-wrapper_input']}
                          placeholder={fieldInput.label}
                          error={errors['test3']?.message}
                        />
                      )
                    }}
                  />
                )

              default:
                return null
            }
          })}
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
