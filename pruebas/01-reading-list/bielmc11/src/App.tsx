/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import './App.css'
import { getBooks } from './services/books'
import { type Library } from './interfaces/interfaces'

function App () {
  const [books, seetBooks] = useState<Library[]>([])

  useEffect(() => {
    getBooks
      .then(data => {
        console.log(data.library)
        seetBooks(data.library)
      })
      .catch(err => { console.log(err.message) })
  }, [])

  return (
    <>
      <p>buenos dias</p>
      <p>{JSON.stringify(books)}</p>
    </>
  )
}

export default App
