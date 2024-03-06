import styled from 'styled-components'

export const Fieldset = styled.fieldset.attrs({
  className: 'Fieldset'
})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0 0 0.85rem;
  border: 0;
`

export const Label = styled.label.attrs({
  className: 'Label'
})`
  color: var(--white);
  font-size: 1rem;
`

export const Input = styled.input.attrs({
  className: 'Input'
})`
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid var(--white);
  background-color: transparent;
  color: var(--white);
  appearance: none;
  font-family: var(--primary-font);

  &::placeholder {
    color: var(--white);
  }
`

export const ErrorMessage = styled.p.attrs({
  className: 'ErrorMessage'
})`
  color: var(--red);
  font-size: 1rem;
`