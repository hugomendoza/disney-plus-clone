import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselItem, ContentCarousel } from './Hero.styles'
import { Movie } from '@/types/types'
import { useAppSelector } from '@/hooks'

export const Hero = () => {
  const { movies } = useAppSelector(state => state.categories)

  const premierMovies = movies?.filter(mov => mov.premier === true)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '50px',
    arrows: false
  }

  return (
    <Slider {...settings}>
      {premierMovies?.map(({id, title, synopsis, image}:Movie) => (
        <CarouselItem
          to={`/movie/${id}`}
          key={id}
        >
          <ContentCarousel>
            <h3>{title}</h3>
            <p>{synopsis}</p>
          </ContentCarousel>
          <img
            src={image}
            alt={title}
          />
        </CarouselItem>
      ))}
    </Slider>
  )
}
