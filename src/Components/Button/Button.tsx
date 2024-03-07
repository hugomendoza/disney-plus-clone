import { StyledButton } from './Button.styles'

interface Props {
  value: string
  type: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export const Button = (props: Props): JSX.Element => {
  const {
    value,
    type,
    disabled,
    onClick
  } = props

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </StyledButton>
  )
}