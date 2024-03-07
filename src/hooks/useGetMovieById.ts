import api from '@/api/api'
import { Movie } from '@/types/types'
import { useState } from 'react'

export const useGetMovieById = () => {
  const [ dataMovie, setDataMovie ] = useState({} as Movie)
  const [ loading, setLoading ] = useState<boolean>(false)

  const getMovieById = async (id: string) => {
    setLoading(true)
    try {
      const { data } = await api.get<Movie>(`movies/${id}`)
      setDataMovie(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    dataMovie,
    getMovieById
  }
}