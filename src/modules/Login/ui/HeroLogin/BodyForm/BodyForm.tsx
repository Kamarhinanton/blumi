import React, { useState } from 'react'
import TextField from '@/ui/TextField/TextField'
import ButtonSecondary from '@/ui/ButtonSecondary/ButtonSecondary'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { validationSchema } from '@/modules/Login/ui/HeroLogin/BodyForm/validationSchema'
import { setCookie, tokenKey } from '@/utils/global'
import { AuthResponseType } from '@/utils/handleTypes'

// import Link from 'next/link'

import styles from './BodyForm.module.scss'

type FormData = {
  email: string
  password: string
}

const BodyForm = () => {
  const [sending, setSending] = useState(false)
  const [error, setError] = useState({ visible: false, message: '' })
  const defaultValues: FormData = {
    email: '',
    password: '',
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    values: defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const resetForm = () => {
    reset(defaultValues)
  }

  const onSubmit = async (data: FormData) => {
    setSending(true)
    setError({ visible: false, message: '' })
    const { email, password } = data

    try {
      const response = await fetch('/api/loginUser', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const responseData = await response.json()
      const { data: dataInner }: { data: AuthResponseType } =
        responseData.response

      setCookie({ data: dataInner, tokenKey })

      if (!response.ok) {
        resetForm()
        setSending(false)
        setError({
          visible: true,
          message:
            "The email and password you provided don't match our records. Please double-check and try again.",
        })
        return
      }

      console.log('Token:', dataInner.access_token)

      const userResponse = await fetch('/api/showUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataInner.access_token}`,
        },
      })

      if (!userResponse.ok) {
        resetForm()
        setSending(false)
        setError({
          visible: true,
          message: 'Failed to fetch user data',
        })
        return
      }

      resetForm()
    } catch (error) {
      console.error(error)
      resetForm()
      setError({
        visible: true,
        message: 'Something went wrong, please try again later',
      })
    }
    setSending(false)
  }

  return (
    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['form__input-wrapper']}>
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
                error={errors['email']?.message}
              />
            )
          }}
        />
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
      {error.visible && (
        <p className={styles['form__bottom-subtext']}>{error.message}</p>
      )}
      <ButtonSecondary
        type="submit"
        className={styles['form__button']}
        variant={'pink'}
        disabled={sending}
      >
        Continue
      </ButtonSecondary>
      {/*<p className={styles['form__bottom-text']}>*/}
      {/*  You’re a model?{' '}*/}
      {/*  <Link className={'border-link'} href={routes.public.signUpCustomer}>*/}
      {/*    Sign up as a Model*/}
      {/*  </Link>*/}
      {/*</p>*/}
    </form>
  )
}

export default BodyForm
