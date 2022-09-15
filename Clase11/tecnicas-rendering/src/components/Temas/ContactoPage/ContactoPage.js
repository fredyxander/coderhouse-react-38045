import React from "react";

export const ContactoPage = () => {
  const isLoading = false;
  const value = "curso react"
  // if(isLoading === true){
  //   return <p>cargando...</p>
  // }

  // useEffect()

  // const miFuncion = ()=>{

  // }

  // return <p>datos listos</p>

  //segunda tecnica
  return(
    <div>
      <h2>titulo</h2>
      {/* {
        isLoading === true ?
        <p>cargando...</p>
        :
        <p>cargados datos</p>
      } */}
      {
        isLoading === false &&  value === "curso react2" && <p>React</p>
      }
    </div>
  )
}
