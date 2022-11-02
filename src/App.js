import { useState } from 'react';
import './App.css';
import Boton from './Component/Boton';
import Contador from './Component/Contador';

function App() {
  const [numero, setNumero]= useState(0)
  const handlerClick = () =>{
    setNumero(numero+1);
  }
  const handlerReiniciar = ()=>{
    setNumero(0);
  }
  return (
    <div className="App">
      <Contador numero={numero} />
      <Boton esClick={true} funcion={handlerClick} nombre={"Click"} />
      <Boton esClick={false} funcion={handlerReiniciar} nombre={"Reiniciar"} />
    </div>
  );
}

export default App;
