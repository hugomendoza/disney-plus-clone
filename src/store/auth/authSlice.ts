import { createSlice } from '@reduxjs/toolkit'
import { PropsAuth } from '@/types/types'

const initialState:PropsAuth = {
  status: 'not-authenticated',
  user: {}
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
    }
  }
})

export const { onLogin, onLogout } = authSlice.actions