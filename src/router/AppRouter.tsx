import { Navigate, Route, Routes } from 'react-router-dom'

import {
  ContentCategory,
  ContentDetails,
  HomePage,
  LoginPage
} from '@/Pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<LoginPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/brand/:slug' element={<ContentCategory />} />
      <Route path='/category/:slug' element={<ContentDetails />} />
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}