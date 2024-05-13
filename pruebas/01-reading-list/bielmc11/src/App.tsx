/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import './App.css'
import { getBooks } from './services/books'
import { type Library } from './interfaces/interfaces'
import { useAppDispatch, useAppSelector } from './hooks/useStore'
import { increment } from './store/books/slice'

function App () {
  const [books, seetBooks] = useState<Library[]>([])
  const [loanding, setLoanding] = useState<boolean | null >(null)

  const storedBooks = useAppSelector((state) => state)
  const mydispatch = useAppDispatch()

  console.log(storedBooks.books)

  useEffect(() => {
    setLoanding(true)
    getBooks
      .then(data => {
        // console.log(data.library)
        seetBooks(data.library)
      })
      .catch(err => { console.log(err.message) })
      .finally(() => {
        setLoanding(false)
      })
  }, [])

  return (
    <>
    <button onClick={() => {
      mydispatch(increment())
    }}> SUMAR </button>
      <p>buenos dias</p>
      { loanding === false ? <p>{JSON.stringify(books)}</p> : <h3>CARGANDO...</h3> }

    </>
  )
}

export default App
