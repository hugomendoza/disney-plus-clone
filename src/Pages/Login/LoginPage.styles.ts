import styled from 'styled-components'

import { bgLoginDisney } from '@/assets/img'

export const WrapperLogin = styled.main.attrs({
  className: 'WrapperLogin'
})`
  width: 100%;
  height: 100dvh;
  background-image: url(${bgLoginDisney});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormLogin = styled.form.attrs({
  className: 'FormLogin'
})`
  background-color: rgba(0, 0, 0, 0.25);
  padding: 2rem;
  margin-top: 5rem;
  border-radius: 1rem;
  width: min(100%, 550px);

  .StyledButton {
    width: 100%;
    margin-top: 0.5rem;
    border-radius: 20rem;
  }
`

export const TitleForm = styled.h2.attrs({
  className: 'TitleForm'
})`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
`