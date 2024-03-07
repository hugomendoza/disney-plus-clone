import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ProsGrid {
  cols: number
}

export const HomeSection = styled.section.attrs({
  className: 'HomeSection'
})`
  padding: 50px;
`

export const WrapperCards = styled.div.attrs({
  className: 'WrapperCards'
})<ProsGrid>`
  display: grid;
  grid-template-columns: repeat(${({cols}) => cols}, 1fr);
  gap: 1rem;
  margin-inline: auto;
  width: min(1280px, 90%);
`

export const CardCategory = styled(Link).attrs({
  className: 'CardCategory'
})`
  display: grid;
  place-items: center;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  border-radius: 0.75rem;
  aspect-ratio: 2 / 0.75;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  
  img {
    max-width: 8ch;
    max-height: 2rem;
  }

  &:hover {
    transform: scale(1.05);
    border: 1.5px solid var(--white);
  }
`