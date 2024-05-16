/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/useStore'
import { fetchGetBooks } from './store/books/slice'
import { GeneralList } from './components/GeneralList'

function App () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetBooks())
  }, [])

  return (
    <>
      <GeneralList/>
    </>
  )
}

export default App
