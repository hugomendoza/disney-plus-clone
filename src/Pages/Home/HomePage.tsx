import {
  Hero,
  Nav
} from '@/Components'
import { CardCategory, HomeSection, WrapperCards } from './HomePage.styles'

export const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <HomeSection>
        <WrapperCards>
          <CardCategory>
            <img src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png' />
          </CardCategory>
          <CardCategory>
            <img src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png' />
          </CardCategory>
          <CardCategory>
            <img src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png' />
          </CardCategory>
          <CardCategory>
            <img src='https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png' />
          </CardCategory>
        </WrapperCards>
      </HomeSection>
    </>
  )
}
