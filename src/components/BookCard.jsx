import React from 'react';
import s from "./../styles/BooksCard.module.css"
import ImageCard from "./ImageCard";
import Cart from './../images/Cart.jpg'

const BookCard = book => {
  const { title, author, price, rating, image, addToCart, addedCount } = book;
  return (
      <div className={s.linkCard}>
          <div className={s.titleBooks}>
              <i>{title}</i>
          </div>
          <div className={s.descBooks}>
              <small><i>— {author}</i></small>
              <ImageCard image={image}/>
              <div className={s.imgStyles}>Цена: {price}р
                  <a onClick={addToCart.bind(this, book)}>
                  <img src={Cart}/>{addedCount > 0 && `(${addedCount})`}
                  </a></div>
              <div>Оценка: {rating}</div>
              <button>Подробнее</button>
          </div>
</div>
  );
};

export default BookCard;
