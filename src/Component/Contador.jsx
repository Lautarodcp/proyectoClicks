import React from "react";
import "../Component/Contador.css"

const Contador = (props) =>{
    return (
        <div className="contador">
        {props.numero}
        </div>
    )
}

export default Contador;