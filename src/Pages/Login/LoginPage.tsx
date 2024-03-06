import { Button, Inputs, LogoDisney } from '@/Components'
import { FormLogin, TitleForm, WrapperLogin } from './LoginPage.styles'

export const LoginPage = () => {
  return (
    <WrapperLogin>

      <LogoDisney
        size='medium'
      />

      <FormLogin>
        <TitleForm>
          Ingresa tus datos para continuar
        </TitleForm>
        <Inputs
          label='Email'
          name='email'
          type='email'
          placeholder='Ingresa tu correo'
          value=''
          onChange={() => {}}
        />
        <Inputs
          label='Contraseña'
          name='password'
          type='password'
          placeholder='Ingresa tu contraseña'
          value=''
          onChange={() => {}}
        />
        <Button
          value='Continuar'
          type='submit'
          onClick={() => {}}
        />
      </FormLogin>

    </WrapperLogin>
  )
}