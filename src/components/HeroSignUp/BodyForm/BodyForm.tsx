import React from 'react'
import TextField from '@/ui/TextField/TextField'
import ButtonSecondary from '@/ui/ButtonSecondary/ButtonSecondary'
import Link from 'next/link'
import routes from '@/utils/routes'

import styles from './BodyForm.module.scss'

const BodyForm = () => {
  return (
    <form className={styles['form']} onSubmit={() => console.log('hello')}>
      <div className={styles['form__input-wrapper']}>
        <TextField
          className={styles['form__input-wrapper_input']}
          name={'First name'}
          placeholder={'First name'}
          label={'Make sure it matches your government ID.'}
        />
        <TextField
          className={styles['form__input-wrapper_input']}
          name={'Last name'}
          placeholder={'Last name'}
        />
        <TextField
          className={styles['form__input-wrapper_input']}
          name={'Email'}
          placeholder={'Email'}
          label={'We’ll email you confirmation and receipts.'}
        />
        <TextField
          className={styles['form__input-wrapper_input']}
          name={'Password'}
          placeholder={'Password'}
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
      <ButtonSecondary className={styles['form__button']} variant={'pink'}>
        Agree and Continue
      </ButtonSecondary>
      <p className={styles['form__bottom-text']}>
        You’re a model?{' '}
        <Link className={'border-link'} href={routes.public.signUpCustomer}>
          Sign up as a Model
        </Link>
      </p>
    </form>
  )
}

export default BodyForm
