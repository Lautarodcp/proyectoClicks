import React from "react";
import "../Component/Boton.css"


  const Boton = (props)=>{
    return (
      <button 
      className={props.esClick?"click":"reiniciar"}
      onClick={props.funcion} >
        {props.nombre}
      </button>
    )
  }

  export default Boton;