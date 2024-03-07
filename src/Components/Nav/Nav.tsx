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
import { useAppSelector } from '@/hooks'

export const Nav = () => {
  const { user } = useAppSelector(state => state.auth)
  const [showButton, setShowButton] = useState<boolean>(false)

  const {avatar, name} = user

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
          <span>{name}</span>
          <AvatarImage>
            <img
              src={avatar}
              alt={name}
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