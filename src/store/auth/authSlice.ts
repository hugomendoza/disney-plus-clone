import { PropsAuth } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState:PropsAuth = {
  status: 'not-authenticated',
  user: {},
  errorMessage: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
    },
    onLogout: (state) => {
      state.status = 'not-authenticated'
      state.user = initialState.user
    },
    catchError: (state, { payload }) => {
      state.errorMessage = payload
    }
  }
})

export const { onLogin, onLogout, catchError } = authSlice.actions