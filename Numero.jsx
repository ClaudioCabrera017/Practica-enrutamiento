import React from "react";

const Numero = props => {
  const number = props.match.params.number
  return (
    <>
      {!isNaN(number)  (<h3>Numero: {number}</h3>) }
    </>
  )
}
export default Numero;
