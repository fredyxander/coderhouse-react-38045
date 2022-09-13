import React, {useContext} from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export const CartContainer = () => {
  const value = useContext(ThemeContext);

  return (
    <div>
      CartContainer
      <h2>{value.texto}</h2>
      <button onClick={()=>value.setTexto("nuevo texto")}>enviar texto</button>
    </div>
  )
}
