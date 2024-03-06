import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'

const DisneyApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default DisneyApp