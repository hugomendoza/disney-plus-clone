import { PropsLogo, StyledLogo, WrapperLogo } from './LogoDisney.styles'
import { logoDisney } from '@/assets/img'

export const LogoDisney = ({size}:PropsLogo) => {
  return (
    <WrapperLogo>
      <StyledLogo
        size={size}
        src={logoDisney}
      />
    </WrapperLogo>
  )
}
