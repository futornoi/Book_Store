import React from 'react';
import { Button, Image, List } from 'semantic-ui-react'


const Cart = ({image, title, id, deleteCards}) => {
   debugger
   return (
      <List divided verticalAlign='middle' size={'big'}>
         <List.Item>
            <List.Content floated='right'>
               <Button onClick={deleteCards.bind(this, id)} color='red'>Удалить</Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content>{title}</List.Content>
         </List.Item>
      </List>
   )}


export default Cart;