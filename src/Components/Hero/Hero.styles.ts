import styled from 'styled-components'

export const CarouselItem = styled.a.attrs({
  className: 'CarouselItem'
})`
  width: 100%;
  height: 32rem;
  position: relative;
  padding: 0 1rem;
  color: white;
  display: block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.75rem;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  }
`

export const ContentCarousel = styled.div.attrs({
  className: 'ContentCarousel'
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(15%, -50%);
  z-index: 1;
  width: min(90%, 25rem);

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.25rem;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
  }
`