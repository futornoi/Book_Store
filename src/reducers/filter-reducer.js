let CHANGE_FILTER_NAME = 'CHANGE-FILTER-NAME';
let ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';

let initialState = {
   filterName: 'all',
   inputValue: '',
}

const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'CHANGE-FILTER-NAME':
         return {
            ...state,
            filterName: action.payload,
         }
      case 'ON_CHANGE_INPUT':
         return {
            ...state,
            inputValue: action.payload,
         }
      default:
         return state;
   }
}

export const onChangeInput = (value) => ({type: ON_CHANGE_INPUT, payload: value})
export const changeFilterName = (filterName) => ({type: CHANGE_FILTER_NAME, payload: filterName})


export default filterReducer;