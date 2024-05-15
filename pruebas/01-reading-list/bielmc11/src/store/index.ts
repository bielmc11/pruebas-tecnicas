import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/slice'

//! AQUI TENGO QUE HACER LOS MIDDLEWARE PARA HACER CARGA OPTIMA

export const store = configureStore({
  reducer: { books: booksReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
