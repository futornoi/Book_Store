import {getBooks} from "../API/api";

const GET_BOOKS = 'books/GET-BOOKS';
const IT_IS_READY = 'books/IT_IS_READY';

let initialState = {
   isReady: false,
   items: null,
}


const booksReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'books/GET-BOOKS':
         return {
            ...state,
            items: action.payload,
            isReady: true,
         }
      case 'books/IT_IS_READY':
         return {
            ...state,
            isReady: action.payload,
         }
      default:
         return state;
   }
}

export const getReady = (ready) => ({
   type: IT_IS_READY, payload: ready,
})


export const setBooks = (book) => ({
   type: GET_BOOKS, payload: book
})


//THUNK CREATOR
export const readyBooks = () => {
   return async (dispatch) => {
      dispatch(getReady(false));

      let data = await getBooks();

         dispatch(setBooks(data));
         dispatch(getReady(true));
   }
}


export default booksReducer;