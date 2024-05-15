/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/useStore'
import { fetchGetBooks } from './store/books/slice'

function App () {
  const booksState = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetBooks())
  }, [])

  return (
    <>
      { booksState.loanding === true && booksState.error !== true ? <h2>Cargando...</h2> : <h3> {JSON.stringify(booksState.data)} </h3>}
    </>
  )
}

export default App
