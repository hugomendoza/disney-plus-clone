import { PropsLogo, StyledLogo, WarpperLogo } from './LogoDisney.styles'
import { logoDisney } from '@/assets/img'

export const LogoDisney = ({size}:PropsLogo) => {
  return (
    <WarpperLogo>
      <StyledLogo
        size={size}
        src={logoDisney}
      />
    </WarpperLogo>
  )
}
