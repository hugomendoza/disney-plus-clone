import { useState } from 'react'
import { Button } from '../Button/Button'
import { LogoDisney } from '../LogoDisney/LogoDisney'
import {
  AvatarImage,
  AvatarZone,
  StyledNav,
  WrapperLinks,
  WrapperZoneUser
} from './Nav.styles'

export const Nav = () => {
  const [showButton, setShowButton] = useState<boolean>(false)

  return (
    <StyledNav>
      <LogoDisney size="small"/>
      <WrapperLinks>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Search</a>
        </li>
        <li>
          <a href="">Watchlist</a>
        </li>
        <li>
          <a href="">Movies</a>
        </li>
      </WrapperLinks>
      <WrapperZoneUser
        $show={showButton}
        onClick={() => setShowButton(!showButton)}
      >
        <AvatarZone>
          <span>Huginho</span>
          <AvatarImage>
            <img
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt=""
            />
          </AvatarImage>
        </AvatarZone>
        <Button
          value="Cerrar sesión"
          type="button"
          onClick={() => {}}
        />
      </WrapperZoneUser>
    </StyledNav>
  )
}