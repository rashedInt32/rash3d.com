import React from 'react';

const Card = ({ onClickCard, name, bg }, props) => {
  const style = {
    background: `url(${bg})`,
    backgroundPosition: 'top center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'

  }
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
