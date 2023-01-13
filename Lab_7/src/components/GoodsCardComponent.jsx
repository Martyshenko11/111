import React from 'react';
import { Goods } from '../mocks/Goods';
import '../styles/GoodsCard.css'

const GoodsCard = () => {
  return (
    <div className='item-container'> 
      {Goods.map(item => <GoodsItem info={item} key={item.id} />)} 
    </div>
  );
};

const GoodsItem = ({ info }) => {
  const { img, name, price, description } = info;
  return (
    <div className='item'>
      <img className='item-img' src={img} alt='phone' />
      <p>Назва: {name}</p>
      <p>Ціна: {price}</p>
      <p>Опис: {description}</p>
    </div>
  );
};

export default GoodsCard;