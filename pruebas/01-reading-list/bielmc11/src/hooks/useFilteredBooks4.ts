import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from './useStore'
import { fetchGetBooks } from '@/store/books/slice'

export const useFilteredBooks4 = () => {
  const { data, loanding, error } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchGetBooks())
  }, [])

  const filteredData = useMemo(() => {
    return data.slice(1, 5)
  }, [data])

  const nada = () => {
    scrollTo()
  }

  return { data, loanding, filteredData, error }
}
