import React from 'react';
import {connect} from "react-redux";
import MenuComponent from "./Menu";
import {deleteCards} from "../../reducers/cart-reducer";
import uniqBy from 'lodash/uniqBy'


const MenuContainer = (props) => {
   return < MenuComponent addCards={props.addCards} totalPrice={props.totalPrice} countCart={props.countCart}
                          books={props.books}
                          deleteCards={props.deleteCards}
                          cardItems={props.cardItems}/>
}

let mapStateToProps = (state) => {
   return {
      totalPrice: state.cardsReducer.cardItems.reduce((total, book) => total + book.price, 0),
      countCart: state.cardsReducer.cardItems.length,
      cardItems: uniqBy(state.cardsReducer.cardItems, c => c.id),
   }
}


export default connect(mapStateToProps, {deleteCards})(MenuContainer)