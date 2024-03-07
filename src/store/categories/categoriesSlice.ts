import { createSlice } from '@reduxjs/toolkit'
import { LoadContentState } from '@/types/types'

const initialState:LoadContentState = {
  categories: [],
  movies: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    onAllowedCategories: (state, { payload }) => {
      state.categories = payload
    },
    onMoviesPremiere: (state, { payload }) => {
      state.movies = payload
    },
    onCleanData: (state) => {
      state.categories = []
      state.movies = []
    }
  }
})

export const { onAllowedCategories, onCleanData, onMoviesPremiere } = categoriesSlice.actions