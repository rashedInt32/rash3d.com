import React from 'react';

const Card = ({ onClickCard, name }, props) => {
  return (
    <div
      className="card"
      onClick={ onClickCard }
      {...props}
      >
      <h3>{name}</h3>
    </div>
  );
}

export default Card;
