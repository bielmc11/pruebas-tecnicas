import { Books } from '../const/books'
import { type APIResults } from '../interfaces/interfaces'

export const getBooks = new Promise<APIResults>((resolve) => {
  setTimeout(() => {
    resolve(Books)
  }, 1000)
})
