import { useForm, useAuthStore } from '@/hooks'
import { Button, Inputs, LogoDisney } from '@/Components'
import { FormLogin, TitleForm, WrapperLogin } from './LoginPage.styles'

export const LoginPage = () => {
  const loginFields = {
    email: '',
    password: ''
  }

  const {
    checking,
    errors,
    startLogin,
    setErrors,
    validateForm
  } = useAuthStore()

  const {
    email,
    password,
    onInputChange
  } = useForm(loginFields)

  const loginSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validateForm(email, password)
    if (Object.keys(validationErrors).length === 0) {
      startLogin({ email, password })
      setErrors({
        email: '',
        password: ''
      })
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <WrapperLogin>

      <LogoDisney
        size='medium'
      />

      <FormLogin onSubmit={loginSubmit} noValidate>
        <TitleForm>
          Ingresa tus datos para continuar
        </TitleForm>
        <Inputs
          label='Email'
          name='email'
          type='email'
          placeholder='Ingresa tu correo'
          value={email}
          onChange={onInputChange}
          error={errors.email !== ''}
          errorMessage={errors.email}
        />
        <Inputs
          label='Contraseña'
          name='password'
          type='password'
          placeholder='Ingresa tu contraseña'
          value={password}
          onChange={onInputChange}
          error={errors.password !== ''}
          errorMessage={errors.password}
        />
        <Button
          $variant='blue'
          value='Continuar'
          type='submit'
          onClick={() => {}}
          disabled={checking}
        />
      </FormLogin>

    </WrapperLogin>
  )
}