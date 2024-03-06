import styled from 'styled-components'

export const BannerCategory = styled.main.attrs({
  className: 'BannerCategory'
})`
  aspect-ratio: 16 / 5;
  display: grid;
  place-items: center;
  margin-bottom: 1.5rem;
`

export const SectionCategory = styled.section.attrs({
  className: 'SectionCategory'
})`
  width: 90%;
  margin-inline: auto;

  .slick-slider {
    position: relative;
  }

  .slick-arrow {
    position: absolute;
    height: 100%;
    width: 2.5rem;
    z-index: 1;
    color: white;
    &::before {
      display: none;
    }

    svg {
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      svg {
        opacity: 1;
      }
    }
  }

  .slick-disabled {
    display: none;
  }
`

export const HeaderSection = styled.header.attrs({
  className: 'HeaderSection'
})`
  width: 100%;
  margin-bottom: 1.5rem;
`

export const CardMovie = styled.a.attrs({
  className: 'CardMovie'
})`
  aspect-ratio: 16 / 9;
  display: block;
  padding: 0 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
    object-position: center;
  }
`