import api from '@/api/api'
import { MoviesByCategory } from '@/types/types'
import { useState } from 'react'

export const useGetMovieByCategory = () => {
  const [ dataCategories, setDataCategories ] = useState({} as MoviesByCategory)

  const getMovieByCategories = async (id: string) => {
    try {
      const { data } = await api.get<MoviesByCategory>(`categories/${id}?_embed=movies`)
      setDataCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    dataCategories,
    getMovieByCategories
  }
}