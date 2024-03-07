import api from '@/api/api'
import { useAppDispatch } from './useRedux'
import { onAllowedCategories, onMoviesPremiere } from '@/store'
import { Category, Movie } from '@/types/types'

export const useStoreData = () => {
  const dispatch = useAppDispatch()

  const startLoadingContent = async () => {
    const [categories, movies] = await Promise.all([
      api.get<Category[]>('/categories'),
      api.get<Movie[]>('/movies')
    ])
    dispatch(onAllowedCategories(categories.data))
    dispatch(onMoviesPremiere(movies.data))
  }

  return {
    startLoadingContent
  }
}