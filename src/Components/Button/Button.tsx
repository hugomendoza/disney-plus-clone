import { PropsButton, StyledButton } from './Button.styles'

interface Props extends PropsButton {
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
    $variant,
    onClick
  } = props

  return (
    <StyledButton
      $variant={$variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </StyledButton>
  )
}