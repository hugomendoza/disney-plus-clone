import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Nav } from '@/Components'
import { BannerCategory, CardMovie, HeaderSection, SectionCategory } from './ContentCategory.styles'
import { NextArrow, PrevArrow } from './components/ButtonsNavSlider'

export const ContentCategory = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4.35,
    slidesToScroll: 1,
    speed: 750,
    cssEase: 'linear',
    prevArrow: <PrevArrow className='' onClick={() => {}} />,
    nextArrow: <NextArrow className='' onClick={() => {}} />
  }

  return (
    <>
      <Nav />
      <BannerCategory>
        <img src="https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png" alt="" />
      </BannerCategory>

      <SectionCategory>
        <HeaderSection>
          <h2>Recien agregados</h2>
        </HeaderSection>
        <Slider {...settings}>
          <CardMovie>
            <img src="https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png" alt="" />
          </CardMovie>
          <CardMovie>
            <img src="https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png" alt="" />
          </CardMovie>
          <CardMovie>
            <img src="https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png" alt="" />
          </CardMovie>
          <CardMovie>
            <img src="https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png" alt="" />
          </CardMovie>
          <CardMovie>
            <img src="https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png" alt="" />
          </CardMovie>
        </Slider>
      </SectionCategory>
    </>
  )
}
