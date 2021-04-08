import React from 'react';
import {Button, Menu, Popup} from 'semantic-ui-react'
import Cart from "./Cart/Cart";


const  MenuComponent = (props) => {
   debugger
   return (
      <Menu size='massive'>
         <Menu.Item
            name='editorials'
         >
            React  shop
         </Menu.Item>

         <Menu.Menu position='right'>
            <Menu.Item name='prices'>
               Итого {props.totalPrice} руб.
            </Menu.Item>

            <Popup
               trigger={
                  <Menu.Item name='cart'>
                     <Button primary>Корзина({props.countCart})</Button>
                  </Menu.Item>
               }
               content={props.cardItems && props.cardItems.map((book) => <Cart deleteCards={props.deleteCards} {...book}/> ) }
               on={'click'}
               hideOnScroll
            />
         </Menu.Menu>
      </Menu>
   )
}

export default MenuComponent;