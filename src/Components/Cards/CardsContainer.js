import React, {Component} from 'react';
import {connect} from "react-redux";
import Cards from "./Cards";
import Preloader from "../common/Preloader";
import {readyBooks} from "../../reducers/books-reducer";
import {searchBooks} from "../Filter/FilterContainer";
import {addCards} from "../../reducers/cart-reducer";


class CardsContainer extends Component {

   componentDidMount() {
      this.props.readyBooks();
   }

   countOfSelectedBook = (book) => {
      return this.props.cardsItems.reduce((count, item) => count + (item.id === book ? 1 : 0) ,0);
   }

   render() {
      if(!this.props.isReady) return <Preloader />
      return <Cards
         books={searchBooks(this.props.books, this.props.inputValue, this.props.filterName)}
         addCards={this.props.addCards}
         countOfSelectedBook={this.countOfSelectedBook}
      />
   }
}



let mapStateToProps = (state, props) => {
   return {
      books : state.booksReducer.items,
      isReady : state.booksReducer.isReady,
      inputValue : state.filterReducer.inputValue,
      filterName : state.filterReducer.filterName,
      cardsItems: state.cardsReducer.cardItems
   }
}

export default connect(mapStateToProps, {readyBooks, addCards})(CardsContainer);