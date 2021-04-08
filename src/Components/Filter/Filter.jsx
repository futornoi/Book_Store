import React, {useState} from 'react';
import {Input, Menu} from "semantic-ui-react";

const Filter = ({changeFilterName, onChangeInput, inputValue}) => {

   let [activeItem, setActiveItem] = useState('all')

   let handleItemClick = (e, { name }) => {
      setActiveItem(name);
      changeFilterName(name);
   }

   return (
      <Menu tabular>
         <Menu.Item
            name='all'
            active={activeItem === 'all'}
            onClick={handleItemClick}>
            Все
         </Menu.Item>
         <Menu.Item
            name='priceUp'
            active={activeItem === 'priceUp'}
            onClick={handleItemClick}>
            Цена(дорогие)
         </Menu.Item>
         <Menu.Item
            name='priceDown'
            active={activeItem === 'priceDown'}
            onClick={handleItemClick}>
            Цена(дешевые)
         </Menu.Item>
         <Menu.Item
            name='author'
            active={activeItem === 'author'}
            onClick={handleItemClick}>
            Автор
         </Menu.Item>
         <Menu.Item position='right'>
            <Input icon='search' value={inputValue} onChange={e => {onChangeInput(e.target.value)}} placeholder='Search...' />
         </Menu.Item>
      </Menu>)

}

export default Filter;