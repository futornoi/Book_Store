import axios from "axios";


export const getBooks = () => {
   return (
      axios.get('/books.json').then((response) => {
         return response.data
      })
   )
}
