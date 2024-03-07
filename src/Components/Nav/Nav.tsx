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
import { useAppDispatch, useAppSelector } from '@/hooks'
import { onCleanData, onLogout } from '@/store'
import { Link } from 'react-router-dom'
import { IconHome, IconPlaylistAdd, IconSearch } from '@tabler/icons-react'

export const Nav = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.auth)
  const [showButton, setShowButton] = useState<boolean>(false)

  const {avatar, name} = user

  const closeSession = () => {
    dispatch(onLogout())
    dispatch(onCleanData())
    setShowButton(false)
  }

  return (
    <StyledNav>
      <LogoDisney size="small"/>
      <WrapperLinks>
        <li>
          <Link to={'/'}>
            <IconHome size={16} color='gray' />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <IconSearch size={16} color='gray' />
            <p>Search</p>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <IconPlaylistAdd size={16} color='gray' />
            <p>Watchlist</p>
          </Link>
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
          $variant="blue"
          value="Cerrar sesión"
          type="button"
          onClick={closeSession}
        />
      </WrapperZoneUser>
    </StyledNav>
  )
}