import React, {useContext} from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export const ContactoPage = () => {
  // console.log(useContext(ThemeContext))
  const value = useContext(ThemeContext);
  console.log('value', value)
  return (
    <div>
      ContactoPage
      <p>{value.texto}</p>
      <input onChange={(event)=>value.setTexto(event.target.value)} placeholder="type something"/>
    </div>
  )
}
