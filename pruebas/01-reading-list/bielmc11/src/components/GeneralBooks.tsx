import { useAppSelector } from '../hooks/useStore'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import './GeneralBooks.css'

export const GeneralBooks = () => {
  const generalBooks = useAppSelector((state) => state.books)

  console.log(generalBooks.data.length)
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
                <div key={i} className='overflow-hidden'>
                    <Card className='bg-transparent backdrop-blur-2xl bg-green-100'>
                        <CardHeader>
                            <CardTitle>{book.book.title}</CardTitle>
                            <CardDescription>{book.book.author.name}</CardDescription>
                        </CardHeader>

                        <CardContent className='grid place-items-center'>
                            <div className='overflow-hidden drop-shadow rounded-md'>
                                < img src={book.book.cover} alt="book cover" className='max-w-[200px] max-h-[300px] object-cover object-center' />
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
