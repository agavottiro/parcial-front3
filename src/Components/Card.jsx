import React from "react";

const Card = ({ name, tvShow }) => {
  return (
    <div className="cardStyle">
      <h4>¡Hola, {name}!</h4>
      <h5>¡Excelente elección! A nosotros también nos encanta {tvShow}</h5>
    </div>
  );
};

export default Card;
