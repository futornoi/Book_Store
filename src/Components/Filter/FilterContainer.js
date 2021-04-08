import React from 'react';
import Filter from "./Filter";
import {connect} from "react-redux";
import {changeFilterName, onChangeInput} from "../../reducers/filter-reducer";
import {orderBy} from "lodash";

const sortBy = (books, filterName) => {
   switch (filterName) {
      case 'all':
         return books;
      case 'priceUp':
         return orderBy(books, 'price', 'desc');
      case 'priceDown':
         return orderBy(books, 'price', 'asc');
      case 'author':
         return orderBy(books, 'author', 'asc');
      default:
         return books;
   }
}

const inputFilterBooks = (books, inputValue) => {
    return books.filter(
      (o) => o.title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0,
   )}

export const searchBooks = (books, inputValue, filterName) => {
   return sortBy(inputFilterBooks(books, inputValue), filterName);
}

class FilterContainer extends React.Component {

   render() {
      return <Filter inputValue={this.props.inputValue} changeFilterName={this.props.changeFilterName} onChangeInput={this.props.onChangeInput}/>
   }
}



let mapStateToProps = (state) => {
   return {
      inputValue: state.filterReducer.inputValue,
   }
}

export default connect(mapStateToProps, {changeFilterName, onChangeInput})(FilterContainer);