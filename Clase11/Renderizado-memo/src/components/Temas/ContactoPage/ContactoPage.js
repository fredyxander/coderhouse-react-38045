import React, { useState } from 'react';

const ComponenteTexto = ({value})=>{
  console.log("ComponenteTexto renderizado");
  return(
    <p>{value}</p>
  )
}

const ComponenteInfoFija = React.memo(()=>{
  console.log("ComponenteInfoFija renderizado");
  return(
    <p>contenido estatico</p>
  )
})

export const ContactoPage = () => {
  const [value, setValue] = useState("primer texto");

  return (
    <div>
      ContactoPage
      <ComponenteTexto value={value}/>
      <ComponenteInfoFija/>
      <button onClick={()=>setValue("otro texto")}>cambiar</button>
    </div>
  )
}
