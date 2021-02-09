import React from 'react'

export default function ShopItem({ item }) {
  const style = {
    backgroundImage: `url(${item.img})`,
  }
  
  return (
    <div className="item" style={style}>
      {/* <img className="item-img" src={item.img} alt={item.name + ' ' + item.color} /> */}
      <div className="item-name">{item.name}</div>
      <div className="item-color">{item.color}</div>
      <div className="item-price">${item.price}</div>
      <button className="item-button" type="button">Add to cart</button>
    </div>
  );
}