import React from "react";
import { useParams } from 'react-router'
  
 function Hola() {
    const {message} = useParams();
    return (
        <div>{`${message}`}</div>
    )
}
   
  export default Hola;
