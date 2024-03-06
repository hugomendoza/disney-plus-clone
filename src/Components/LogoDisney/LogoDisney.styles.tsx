import styled from 'styled-components'

export interface PropsLogo {
  size: 'small' | 'medium'
}

export const WarpperLogo = styled.figure.attrs({
  className: 'WarpperLogo'
})`
`

export const StyledLogo = styled.img.attrs({
  className: 'StyledLogo'
})<PropsLogo>`
  width: ${props => ({
    small: '3rem',
    medium: '9rem'
  }[props.size])};
`