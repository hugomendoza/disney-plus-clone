import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselItem, ContentCarousel } from './Hero.styles'

export const Hero = () => {
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
      <CarouselItem href=''>
        <ContentCarousel>
          <h3>Pelicula</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At non quas odio necessitatibus sunt alias. Placeat vel dolores sequi harum? Amet nemo doloribus accusantium tenetur vel, quidem reprehenderit voluptate culpa!</p>
        </ContentCarousel>
        <img src="https://hips.hearstapps.com/hmg-prod/images/hercules-disney-pelicula-1667464184.jpg" alt="" />
      </CarouselItem>
      <CarouselItem href=''>
        <ContentCarousel>
          <h3>Pelicula</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At non quas odio necessitatibus sunt alias. Placeat vel dolores sequi harum? Amet nemo doloribus accusantium tenetur vel, quidem reprehenderit voluptate culpa!</p>
        </ContentCarousel>
        <img src="https://images-1.rakuten.tv/storage/snapshot/shot/423413de-42b0-4184-9d45-0f7a9f6750af-snapshot-1590666325-width936-quality90.jpeg" alt="" />
      </CarouselItem>
      <CarouselItem href=''>
        <ContentCarousel>
          <h3>Pelicula</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At non quas odio necessitatibus sunt alias. Placeat vel dolores sequi harum? Amet nemo doloribus accusantium tenetur vel, quidem reprehenderit voluptate culpa!</p>
        </ContentCarousel>
        <img src="https://2.bp.blogspot.com/-2RNu4IubU10/W5KOLWxuqlI/AAAAAAAAoRw/NF9gosJVE0w_BeqSV366llRVEKVM_5MfwCLcBGAs/s1600/John%2BSilver%2By%2BJim%2BHawkins%2Ben%2BEl%2Bplaneta%2Bdel%2Btesoro%2B-%2BCine%2Bde%2BEscritor.png" alt="" />
      </CarouselItem>
    </Slider>
  )
}
