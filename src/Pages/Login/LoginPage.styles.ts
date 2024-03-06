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