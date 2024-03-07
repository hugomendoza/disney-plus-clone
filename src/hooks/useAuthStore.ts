import { useState } from 'react'
import api from '@/api/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { onLogin, onLogout } from '@/store'
import { UserLogin } from '@/types/types'

import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

interface FormErrors {
  email?: string;
  password?: string;
}

export const useAuthStore = () => {
  const { status, user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (email: string, password: string) => {
    const errors:FormErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email.trim()) {
      errors.email = 'El correo electrónico es requerido'
    } else if (!emailRegex.test(email)) {
      errors.email = 'El correo electrónico no es válido'
    }

    if (!password.trim()) {
      errors.password = 'La contraseña es requerida'
    } else if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    return errors
  }

  const startLogin = async ({email, password}:FormErrors) => {
    try {
      const { data: { user } } = await api.post<UserLogin>('/login', {email, password})
      dispatch(onLogin(user))
    } catch (error) {
      console.log(error)
      Toastify({
        text: 'Error al iniciar sesión, verifica tus credenciales',
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red'
        }
      }).showToast()
    }
  }

  const startLogout = () => {
    dispatch(onLogout())
  }

  return {
    //* Props
    status,
    user,
    errors,
    setErrors,

    //* Methods
    startLogin,
    startLogout,
    validateForm
  }
}