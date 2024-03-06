import { StyledButton } from './Button.styles'

interface Props {
  value: string
  type: 'button' | 'submit'
  onClick?: () => void
}

export const Button = (props: Props): JSX.Element => {
  const {
    value,
    type,
    onClick
  } = props

  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >
      {value}
    </StyledButton>
  )
}