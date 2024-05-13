import { createSlice } from '@reduxjs/toolkit'

//! AÑADIR OPERSISTENCIA AL INITIALS STATE
const initialState = 0

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    increment: (state) => {
      return state + 1
    }
  }
})

export default booksSlice.reducer
export const { increment } = booksSlice.actions
