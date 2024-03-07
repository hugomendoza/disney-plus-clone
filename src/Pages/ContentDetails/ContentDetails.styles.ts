import styled from 'styled-components'

interface PropsModal {
  $open: boolean
}

export const StyledMain = styled.main.attrs({
  className: 'StyledMain'
})`
  position: relative;
`

export const StyledFigure = styled.figure.attrs({
  className: 'StyledFigure'
})`
  aspect-ratio: 16 / 6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0));
  }
`

export const StyledDataMovie = styled.div.attrs({
  className: 'StyledDataMovie'
})`
  position: absolute;
  padding-left: 3rem;
  width: min(450px, 90%);
  top: 50%;
  left: 0;
  transform: translate(0,-50%);

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.35rem;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    margin: 0.75rem 0;
  }
`

export const GroupItems = styled.div.attrs({
  className: 'QualityLogos'
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  
  img {
    height: 1rem;
    width: auto;
  }

  .StyledButton {
    text-transform: uppercase;
    font-weight: 700
  }
`

export const SectionVideo = styled.section.attrs({
  className: 'SectionVideo'
})<PropsModal>`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.85);
  display: ${props => props.$open ? 'grid' : 'none'};
  place-items: center;

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--white);
  }

  iframe {
    border: none;
    aspect-ratio: 16 / 9;
    width: 80%;
    height: 80%;
  }
`