import React from "react";

  
  const Hola = props => {
  
    const hello = props.match.params.hello;
    return (
        <>
          {!isNaN(hello) && <h3>The word is: {hello}</h3> }
        </>
      )
    }
   
  export default Hola;
