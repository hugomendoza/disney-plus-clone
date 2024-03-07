import styled from 'styled-components'

export interface PropsButton {
  $variant: 'blue' | 'white' | 'dark-gray'
}

export const StyledButton = styled.button.attrs({
  className: 'StyledButton'
})<PropsButton>`
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  appearance: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-family: var(--primary-font);
  transition: all 0.2s ease-in-out;

  background-color: var(--${props => props.$variant});
  color: var(--${props => props.$variant}-contrast);

  &::hover {
    filter: brightness(1.3);
  }

  &:disabled {
    background-color: var(--dark-gray);
  }

  &:hover {
    filter: brightness(1.3);
  }

`
