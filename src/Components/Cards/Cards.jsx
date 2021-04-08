import React from 'react';
import {Button, Card, Icon, Image} from 'semantic-ui-react'


const Cards = ({books, addCards, countOfSelectedBook}) => (
   <Card.Group itemsPerRow={4}>
      {books.map(b => (
         <Card key={b.id}>
            <Image src={b.image} wrapped ui={false}/>
            <Card.Content>
               <Card.Header>{b.title}</Card.Header>
               <Card.Meta>
                  <span className='date'>{b.author}</span>
               </Card.Meta>
            </Card.Content>
            <Card.Content extra>
               <a>
                  <Icon name='rub'/>
                  {b.price}
               </a>
            </Card.Content>
            <Button onClick={() => addCards(b)} primary>Добавить в корзину {countOfSelectedBook(b.id)}</Button>
         </Card>
      ))}
   </Card.Group>
)


export default Cards;
