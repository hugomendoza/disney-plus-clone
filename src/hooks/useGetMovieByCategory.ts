import api from '@/api/api'
import { MoviesByCategory } from '@/types/types'
import { useState } from 'react'

export const useGetMovieByCategory = () => {
  const [ dataCategories, setDataCategories ] = useState({} as MoviesByCategory)
  const [loading, setLoading] = useState(false)

  const getMovieByCategories = async (id: string) => {
    setLoading(true)
    try {
      const { data } = await api.get<MoviesByCategory>(`categories/${id}?_embed=movies`)
      setDataCategories(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    dataCategories,
    getMovieByCategories
  }
}