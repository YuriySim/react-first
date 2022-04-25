import React from 'react';

const GoodsCard = ({good, id}) => {
  return (
    <div className="goods__card">
      <div className="goods__card-img-wrapper">
        <img
          src={ require('../assets/images/goods.jpg') }
          loading="lazy"
          alt="goods"
          className="goods__card-img"
        />
      </div>
      <div className="goods__card-title">
        <div className="goods__card-title-text">{id}. { good.title }</div>
      </div>
    </div>
  );
};

export default GoodsCard;