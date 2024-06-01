import { useEffect, useState } from 'react'
import { useAppSelector } from './useStore'
import { type Library } from '@/interfaces/interfaces'

interface FilteredBooksInterface {
  data: Library[]
  isFiltered: boolean | null
}

export const useFilteredBooks = () => {
  const allBooksState = useAppSelector((state) => state.books)
  const [filteredBooks, setFilteredBooks] = useState<FilteredBooksInterface>({ data: [], isFiltered: false })

  // console.log(allBooksState)

  useEffect(() => {
    if (allBooksState.loanding === false) {
      setFilteredBooks({ data: allBooksState.data, isFiltered: true })
      // console.log({ data: allBooksState.data, isFiltered: true })
    }
  }, [allBooksState.loanding])

  if (allBooksState.data.length <= 1) {
    return { filteredBooks: [], isLoanding: true, isError: false }
  }

  return {
    filteredBooks,
    isLoanding: allBooksState.loanding,
    isError: allBooksState.error
  }
}
