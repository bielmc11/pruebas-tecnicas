/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRef } from 'react'
import './App.css'
import { GeneralList } from './components/GeneralList'
import { Header } from './components/Header'
// import { useQuery } from '@tanstack/react-query'

function App () {
  const inputRef = useRef(null)
  const handleInputRef = () => {
    inputRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }
  // Esto no lo estoy usando era para probar el react query
  /* const myfetchForTanstack = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!data.ok) throw new Error('error')
      return await data.json()
    } catch (e: any) {
      console.log(e.message)
    }
  }
 */
  /* const { data, isLoading, isError } = useQuery({
    queryKey: ['test'],
    queryFn: async () => await myfetchForTanstack()
  })
  console.log(data) */

  /*   const dispatch = useAppDispatch()
 */
  /* useEffect(() => {
    dispatch(fetchGetBooks())
  }, []) */

  return (
    <div className='app_wrapper flex flex-col'>
      <Header handleInputRef={ handleInputRef} />
      <GeneralList inputRef={inputRef} />
    </div>
  )
}

export default App
