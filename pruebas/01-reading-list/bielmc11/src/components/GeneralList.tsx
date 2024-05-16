import { useAppSelector } from '../hooks/useStore'

export const GeneralList = () => {
  const generalBooks = useAppSelector((state) => state.books)
  console.log(generalBooks.data)
  return (
    <div className='list_wrapper'>
        {generalBooks.loanding === true && generalBooks.error !== true &&
          <p>Cargando...</p>
        }
        {
            generalBooks.loanding === false && generalBooks.error !== true &&
            generalBooks.data.library.map((book, i) => {
              return (
                <div key={i}>
                    <p style={{ border: '3px solid red' }} > {book.book.title } </p>
                </div>
              )
            })
        }
    </div>
  )
}
