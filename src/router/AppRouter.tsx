import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import {
  ContentCategory,
  ContentDetails,
  HomePage,
  LoginPage
} from '@/Pages'

export const AppRouter = () => {
  const { status } = useAppSelector(state => state.auth)

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path='/auth/*' element={<LoginPage />} />
              <Route path='/*' element={<Navigate to='/auth/login' />} />
            </>
          )
          : (
            <>
              <Route path='/' element={<HomePage />} />
              <Route path='/brand/:slug' element={<ContentCategory />} />
              <Route path='/category/:slug' element={<ContentDetails />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
          )
      }
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}