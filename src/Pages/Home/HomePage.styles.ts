import styled from 'styled-components'

export const HomeSection = styled.section.attrs({
  className: 'HomeSection'
})`
  padding: 50px;
`

export const WrapperCards = styled.div.attrs({
  className: 'WrapperCards'
})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

export const CardCategory = styled.a.attrs({
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
    max-height: 3.5rem;
  }

  &:hover {
    transform: scale(1.05);
    border: 1.5px solid var(--white);
  }
`