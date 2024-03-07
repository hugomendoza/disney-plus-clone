import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieById } from '@/hooks'
import { Layout } from '@/Layout'
import { Button } from '@/Components'
import { GroupItems, SectionVideo, StyledDataMovie, StyledFigure, StyledMain } from './ContentDetails.styles'
import { imax, age } from '@/assets/img'
import { IconSquareRoundedX } from '@tabler/icons-react'

export const ContentDetails = () => {
  const { id } = useParams()
  const { dataMovie, getMovieById } = useGetMovieById()
  const [ activeModal, setActiveModal ] = useState({
    open: false,
    video: '',
    autoplay: 0
  })

  const { title, image, trailer, synopsis } = dataMovie
  const { open } = activeModal
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    getMovieById(id!)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Layout>
      <StyledMain>
        <StyledFigure>
          <img
            src={image}
            alt={title}
          />
        </StyledFigure>
        <StyledDataMovie>
          <h1>{title}</h1>
          <p>{synopsis}</p>
          <GroupItems>
            <img
              src={imax}
              alt="IMAX"
            />
            <img
              src={age}
              alt="Apta para mayores de 13 años"
            />
          </GroupItems>
          <GroupItems>
            <Button
              $variant="white"
              value="Reproducir"
              type="button"
              onClick={() => setActiveModal({
                ...activeModal,
                open: true
              })}
            />
            <Button
              $variant="dark-gray"
              value="Trailer"
              type="button"
              onClick={() => setActiveModal({
                ...activeModal,
                open: true
              })}
            />
          </GroupItems>
        </StyledDataMovie>
      </StyledMain>
      <SectionVideo $open={open}>
        <button
          onClick={() => setActiveModal({
            ...activeModal,
            open: false
          })}
        >
          <IconSquareRoundedX size={40} />
        </button>
        {open && (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${trailer}?si=08mc8lNRq5433Nwv?enablejsapi=1`}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        )}
      </SectionVideo>
    </Layout>
  )
}