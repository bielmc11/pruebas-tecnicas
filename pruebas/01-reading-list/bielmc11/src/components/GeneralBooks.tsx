import { useAppSelector } from '../hooks/useStore'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import './GeneralBooks.css'
import { useFilteredBooks } from '@/hooks/useFilteredBooks'
import { useFilteredBooks3 } from '@/hooks/useFilteredBooks3'

export const GeneralBooks = () => {
  const generalBooks = useAppSelector((state) => state.books)
  const prueba = useFilteredBooks()
  const prueba3 = useFilteredBooks3()

  /* useEffect(() => {
    if (generalBooks.loanding === false) {
      console.log('general books', generalBooks)
    }
  }, [generalBooks.loanding]) */

  /* if (prueba.isLoanding === false) {
    console.log('general books', prueba.filteredBooks)
    return (
        <div>
            {JSON.stringify(prueba.isLoanding)}
        </div>
    )
  } */

  if (prueba3.loanding !== false) {
    return (
      <div> loanfing.....  </div>
    )
  }
  /* //TODO ME falta cambiar de prueba3.loanding... a {loanfing}  */
  if (!prueba3.loanding) {
    console.log(prueba3.filteredBooks)
    return (
      <div>{JSON.stringify(prueba3.filteredBooks)}</div>
    )
  }
  /* //TODO TENGO QUE ACOMODAR ESTA PARTE CON EL CUSTOM HOOK PRUEBA3 */
  return (
        <div>
            {generalBooks.loanding === true && generalBooks.error !== true &&
          <p>Cargando...</p>
        }
            {/* Mirar algun elemento de shad/ui que quede bien aqui */}
            <p>Total Books: {generalBooks.data.length}</p>
            <div className='grid myGridBooks  '>
        {
            generalBooks.loanding === false && generalBooks.error !== true &&
            generalBooks.data.map((book, i) => {
              return (
                <div key={i} className='grid_book'>
                    <Card className='bg-transparent backdrop-blur-2xl h-full bg-green-100 '>{/* //! esta bien con green 100? */}
                        <CardHeader>
                            <CardTitle>{book.book.title}</CardTitle>
                            <CardDescription>{book.book.author.name}</CardDescription>
                        </CardHeader>

                        <CardContent className='grid place-items-center'>
                            <div className='drop-shadow rounded-md'>
                                < img src={book.book.cover} alt="book" className='max-w-[200px] max-h-[300px] object-cover object-center' />
                            </div>
                        </CardContent>

                        <CardFooter className='grid place-items-center '>
                            <p>
                            AQUI PONDRE BOTON AÑADIR/QUIRAR FAVORITOS
                            </p>
                        </CardFooter>
                    </Card>
                </div>
              )
            })
        }
            </div>
        </div>
  )
}
