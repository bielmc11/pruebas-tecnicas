import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './useStore'
import { Genre, type Library } from '@/interfaces/interfaces'
import { fetchGetBooks } from '@/store/books/slice'

export const useFilteredBooks3 = () => {
  const { data, loanding } = useAppSelector((state) => state.books)
  const filters = useAppSelector((state) => state.booksFilter)
  // const [isLoanding, setIsLoanding] = useState<boolean | null>(null)

  const [filteredBooks, setFilteredBooks] = useState<Library[]>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchGetBooks())
  }, [])

  useEffect(() => {
    if (loanding === false) {
      const newfilteredBooks = data.filter((book) => {
        if (filters.genre === Genre.ALL && filters.maxPages === null) return true // no hay filtros

        if (filters.maxPages === null) return book.book.genre === filters.genre // No hay maxPages

        if (filters.genre === Genre.ALL) return book.book.pages <= filters.maxPages // NO hay genre

        return book.book.genre === filters.genre && book.book.pages <= filters.maxPages
      })
      setFilteredBooks(newfilteredBooks) //! Esto es lo que acabo de cambviar mirar si funciona
    }
  }, [filters, loanding])

  return { filteredBooks, loanding }
}
