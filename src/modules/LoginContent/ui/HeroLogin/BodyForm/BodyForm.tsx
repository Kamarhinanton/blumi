import React, { useState } from 'react'
import TextField from '@/ui/TextField/TextField'
import ButtonSecondary from '@/ui/ButtonSecondary/ButtonSecondary'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { validationSchema } from '@/modules/LoginContent/ui/HeroLogin/BodyForm/validationSchema'
// import Link from 'next/link'

import styles from './BodyForm.module.scss'

type FormData = {
  email: string
  password: string
}

const BodyForm = () => {
  const [sending, setSending] = useState(false)

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

  const onSubmit = async (data: Partial<FormData>) => {
    setSending(true)
    // const { email, password } = data

    try {
      // const response = await fetch('/api/createUser', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // })
      console.log(data)

      // if (!response.ok) {
      //   resetForm()
      //   setSending(false)
      //   return
      // }

      resetForm()
    } catch (error) {
      console.error(error)
      resetForm()
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
      {/*<p className={styles['form__bottom-subtext']}>*/}
      {/*  By signing up I accept the <strong>Terms of Service </strong> and{' '}*/}
      {/*  <strong>Privacy Policy</strong>*/}
      {/*</p>*/}
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
