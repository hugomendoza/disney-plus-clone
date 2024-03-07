import styled from 'styled-components'

export interface PropsUser {
  $show: boolean
}

export const StyledNav = styled.nav.attrs({
  className: 'StyledNav'
})`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;

  .WrapperLogo {
    margin-right: 1.5rem;
  }
`

export const WrapperLinks = styled.ul.attrs({
  className: 'WrapperLinks'
})`
  display: flex;
  gap: 1rem;
  flex-grow: 1;

  li {
    list-style: none;
    
    a {
      text-decoration: none;
      color: var(--white);
      text-transform: uppercase;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p {
      font-size: 0.85rem;
      font-weight: 300;
    }
  }
`

export const WrapperZoneUser = styled.div.attrs({
  className: 'WrapperZoneUser'
})<PropsUser>`
  display: flex;
  align-items: center;
  position: relative;
  
  .StyledButton {
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
    position : absolute;
    border-radius: 0.5rem;
    background-color: var(--dark-gray);
    bottom: -1rem ;
    transform: translateY(100%);
    right: 0;
    display: ${props => props.$show ? 'block' : 'none'};
  }
`

export const AvatarZone = styled.div.attrs({
  className: 'AvatarZone'
})`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  
  span {
    font-size: 0.85rem;
  }
`

export const AvatarImage = styled.figure.attrs({
  className: 'AvatarImage'
})`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`