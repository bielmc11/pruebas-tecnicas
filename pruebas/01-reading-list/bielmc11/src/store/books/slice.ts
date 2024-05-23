import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type Library } from '../../interfaces/interfaces'
import { getBooks } from '../../services/books'

export const fetchGetBooks = createAsyncThunk(
  'books/fetchGetBooks',
  async () => {
    const myBooks = await getBooks
    return myBooks
  }
)

interface booksSliceInterface {
  data: Library[]
  loanding: null | boolean
  error: null | boolean
}

//! AÑADIR OPERSISTENCIA AL INITIALS STATE
const initialState = (): booksSliceInterface => {
  const persistantBooks = localStorage.getItem('__general__books__')
  if (persistantBooks !== null) {
    return {
      data: JSON.parse(persistantBooks),
      loanding: null,
      error: null
    }
  }

  return {
    // antes en data habia solo [] pero daba error en GeneralList para mostrar .libray ya que data podia ser solo []
    data: [
      {
        book: {
          ISBN: '-',
          title: '-',
          pages: 0,
          genre: '-',
          cover: '-',
          synopsis: '-',
          year: 0,
          author: {
            name: '-',
            otherBooks: []
          }

        }
      }
    ],
    loanding: null,
    error: null
  }
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    proveReducer (state) {
      console.log('estoy dentro del reducer de prueba')
      return { ...state, error: true }
    }
  },
  extraReducers: (builder) => {
    // Tengo que mirar que tipo devuelve action.paload (que será myBooks)
    builder.addCase(fetchGetBooks.pending, (state) => {
      console.log('cargando...')
      state.loanding = true
    })

    builder.addCase(fetchGetBooks.fulfilled, (state, action) => {
      console.log('cargado!!!!')
      state.loanding = false
      state.data = action.payload
    })

    builder.addCase(fetchGetBooks.rejected, (state) => {
      console.log('ocurrio un error men')
      state.error = true
    })
  }
})

export default booksSlice.reducer
export const { proveReducer } = booksSlice.actions
