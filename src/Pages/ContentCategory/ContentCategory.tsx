import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { useGetMovieByCategory } from '@/hooks'
import { Layout } from '@/Layout'
import { NextArrow, PrevArrow } from './components/ButtonsNavSlider'

import {
  BannerCategory,
  CardMovie,
  HeaderSection,
  SectionCategory
} from './ContentCategory.styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { logosBrand } from '@/helpers/logosBrand'
import { Movie } from '@/types/types'
import { Loader } from '@/Components'

export const ContentCategory = () => {
  const { id } = useParams()
  const { dataCategories, loading, getMovieByCategories } = useGetMovieByCategory()

  const { logo, name, movies } = dataCategories

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

  useEffect(() => {
    getMovieByCategories(id!)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <Layout>
      <BannerCategory>
        <img
          src={logosBrand[logo]}
          alt={name}
        />
      </BannerCategory>

      <SectionCategory>
        <HeaderSection>
          <h2>Recien agregados</h2>
        </HeaderSection>
        <Slider {...settings}>
          {
            movies?.map(({id, image, title}:Movie) => (
              <CardMovie
                to={`/movie/${id}`}
                key={id}
              >
                <img
                  src={image}
                  alt={title}
                  loading='lazy'
                />
              </CardMovie>
            ))
          }
        </Slider>
      </SectionCategory>
    </Layout>
  )
}
