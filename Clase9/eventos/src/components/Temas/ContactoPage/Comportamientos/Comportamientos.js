import React from 'react'

export const Comportamientos = () => {

    const enviarFormulario = (event)=>{
        event.preventDefault();
        console.log("se envio el formulario")
    }

    return (
        <div>
            <p>Comportamientos</p>
            <form onSubmit={enviarFormulario}>
                <input placeholder='email'/>
                <button type='submit'>Enviar formulario</button>
            </form>
        </div>
    )
}
