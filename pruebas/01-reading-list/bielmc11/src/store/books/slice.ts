import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type APIResults } from '../../interfaces/interfaces'
import { getBooks } from '../../services/books'

export const fetchGetBooks = createAsyncThunk(
  'books/fetchGetBooks',
  async () => {
    const myBooks = await getBooks
    return myBooks
  }
)

interface booksSliceInterface {
  data: APIResults | []
  loanding: null | boolean
  error: null | boolean
}

//! AÑADIR OPERSISTENCIA AL INITIALS STATE
const initialState: booksSliceInterface = {
  data: [],
  loanding: null,
  error: null
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
