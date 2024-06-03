import { useFilteredBooks4 } from '@/hooks/useFilteredBooks4'
import './GeneralBooks.css'
import { Card, CardContent, CardHeader, CardDescription, CardFooter, CardTitle } from './ui/card'
export const GeneralBooks = () => {
  const { data, loanding, filteredData, error } = useFilteredBooks4()

  // TODO HAY QUE CAMBIAR DATA POR FILTEREDDATA
  return (
    <div>
            {loanding === true && error !== true &&
          <p>Cargando...</p>
        }
            <p>Total Books: {data.length}</p>
            <div className='grid myGridBooks  '>
        {
            loanding === false && error !== true &&
            data.map((book, i) => {
              return (
                <div key={i} className='grid_book' id='booksList'>
                    <Card className='bg-transparent backdrop-blur-2xl h-full bg-green-100 '>
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
