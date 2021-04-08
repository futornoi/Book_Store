let ADD_CARDS = 'ADD_CARDS';
let DELETE_CARDS = 'DELETE_CARDS';

let initialState = {
   cardItems: [],
}


const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_CARDS':
         return {
            ...state,
            cardItems: [...state.cardItems, action.payload]
         };
      case 'DELETE_CARDS':
         return {
            ...state,
            cardItems: state.cardItems.filter(c => c.id !== action.payload),
         };
      default:
         return state;
   }
}


export const addCards = (obj) => ({
   type: ADD_CARDS, payload: obj
})

export const deleteCards = (id) => ({
   type: DELETE_CARDS, payload: id
})


export default cartReducer;