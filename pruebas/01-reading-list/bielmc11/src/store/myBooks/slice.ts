import { type FilterBooks, Genre } from '@/interfaces/interfaces'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: FilterBooks = {
  maxPages: null,
  genre: Genre.ALL
}

const myBooksSlice = createSlice({
  name: 'booksFilter',
  initialState,
  reducers: {
    setMaxPages: (state, action: PayloadAction<number>) => {
      state.maxPages = action.payload
    },
    setGenre: (state, action) => {
      state.genre = action.payload
    },
    resetAll: (state) => {
      state = initialState
    }
  }
})

export const { setMaxPages, setGenre, resetAll } = myBooksSlice.actions

export default myBooksSlice.reducer
