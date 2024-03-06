import styled from 'styled-components'

export const StyledButton = styled.button.attrs({
  className: 'StyledButton'
})`
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  background-color: var(--blue);
  color: var(--white);
  appearance: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-family: var(--primary-font);
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.3);
  }
`