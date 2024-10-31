import React, { FC, useState } from 'react'
import TextField from '@/ui/TextField/TextField'
import ButtonSecondary from '@/ui/ButtonSecondary/ButtonSecondary'
import Link from 'next/link'
import routes from '@/utils/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, Resolver, useForm } from 'react-hook-form'
import { validationSchema } from '@/modules/SignUpPartner/ui/HeroSignUp/validationSchema'
import FormPopup from '@/components/HeroSignUp/FormPopup/FormPopup'
import { AnimatePresence } from 'framer-motion'
import { UserType } from '@/utils/handleTypes'

import styles from './BodyForm.module.scss'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  displayName: '',
}

type BodyFormType = {
  userType: UserType
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber?: string
  displayName?: string
}

const BodyForm: FC<BodyFormType> = ({ userType }) => {
  const [sending, setSending] = useState(false)
  const [isVisible, setIsVisible] = useState({
    visible: false,
    message: '',
  })
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<FormData>,
  })

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
          {userType.defaultUserFields.phoneNumber && (
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
          {userType.defaultUserFields.displayName && (
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
