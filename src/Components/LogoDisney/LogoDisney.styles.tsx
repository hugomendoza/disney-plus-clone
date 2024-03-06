import styled from 'styled-components'

export interface PropsLogo {
  size: 'small' | 'medium'
}

export const WrapperLogo = styled.figure.attrs({
  className: 'WrapperLogo'
})`
`

export const StyledLogo = styled.img.attrs({
  className: 'StyledLogo'
})<PropsLogo>`
  width: ${props => ({
    small: '4.5rem',
    medium: '9rem'
  }[props.size])};
`