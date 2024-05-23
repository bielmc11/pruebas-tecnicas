/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/useStore'
import { fetchGetBooks } from './store/books/slice'
import { GeneralList } from './components/GeneralList'
import { Header } from './components/Header'
// import { useQuery } from '@tanstack/react-query'

function App () {
  const myfetchForTanstack = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!data.ok) throw new Error('error')
      return await data.json()
    } catch (e: any) {
      console.log(e.message)
    }
  }

  /* const { data, isLoading, isError } = useQuery({
    queryKey: ['test'],
    queryFn: async () => await myfetchForTanstack()
  })
  console.log(data) */

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetBooks())
  }, [])

  return (
    <div className='app_wrapper flex flex-col'>
     <Header />
      {/* <GeneralList/> */}
    </div>
  )
}

export default App
