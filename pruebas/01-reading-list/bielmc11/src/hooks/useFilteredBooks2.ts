import { useEffect, useState } from 'react'
import { useAppSelector } from './useStore'
import { Genre, type Library } from '@/interfaces/interfaces'

export const useFilteredBooks = () => {
  const { data } = useAppSelector((state) => state.books)
  // CREO QUE TENGO QUE HACEER UN ESTADO MIO AQUI ALGO COMO {LOANDING, ERROR, DATA Y DEVOLVER ESTO}

  const { genre, maxPages } = useAppSelector((state) => state.booksFilter)

  const [filteredBooks, setFilteredBooks] = useState<Library[]>()

  useEffect(() => {
    const books = data.filter((books) => {
      if (maxPages === null && genre === Genre.ALL) return true
      if (maxPages === null) return books.book.genre === genre
      if (genre === Genre.ALL) return books.book.pages <= maxPages
      return books.book.genre === genre && books.book.pages <= maxPages
    })
    setFilteredBooks(books)
    console.log('dentro del hook filtered books', filteredBooks)
  }, [genre, maxPages, data]) // TODO aqui me falat poner las dependencias
  return filteredBooks
}
