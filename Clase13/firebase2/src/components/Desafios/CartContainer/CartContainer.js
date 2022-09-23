import React, {useContext, useState} from 'react';
import { CartContext } from '../../../context/CartContext';
import {Link} from "react-router-dom";
import {db} from "../../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export const CartContainer = () => {
  const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");
  // console.log(productCartList)

  const sendOrder = (event)=>{
    event.preventDefault();
    // console.log("orden enviada", event)
    // console.log("nombre", event.target[0].value)
    // console.log("telefono", event.target[1].value)
    const order = {
      buyer:{
        name: event.target[0].value,
        phone:event.target[1].value,
        email: event.target[2].value
      },
      items: productCartList,
      total: getTotalPrice()
    }
    console.log("order", order)
    //crear la referencia donde se va guardar el documento
    const queryRef = collection(db, "orders");
    //crear el documento
    addDoc(queryRef, order).then(response=>{
      console.log("response", response);
      setIdOrder(response.id)
      clear();
    });
  }

  const updateOrder = ()=>{
    //creamos la referencia
    const queryRef = doc(db, "orders", "GbMMY0SYPjoTSuAvGKDF");
    //actualizar el documento
    updateDoc(queryRef,{
      total:80
    }).then(response=>console.log(response))
  }

  return (
    <div>
      {/* <button onClick={updateOrder}>actualizar orden</button> */}
      {idOrder ?
        <>
          <p>su orden fue creado, id {idOrder}</p>
          <Link to="/">
            Ir al listado de productos
          </Link>
        </>
        :
        <div>
          {
            productCartList.length > 0 ?
            <div>
              {productCartList.map(item=>(
                <div style={{border:"1px solid black", margin:"10px", width:"150px"}}>
                  <p>{item.title}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio unitario: {item.price}usd</p>
                  <p>Precio productos: {item.quantityPrice}</p>
                  <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                </div>
              ))}
              <button onClick={clear}>Vaciar el carrito</button>
              <p>Precio total: {getTotalPrice()}</p>
              <form onSubmit={sendOrder}>
                <label>Nombre: </label>
                <input type="text" />
                <label>Telefono: </label>
                <input type="text" />
                <label>Correo: </label>
                <input type="email" />
                <button type='submit'>Enviar orden</button>
              </form>
            </div>
            :
              <>
                <p>El carrito esta vacio, Agrega algun producto</p>
                <Link to="/">
                  Ir al listado de productos
                </Link>
              </>
          }
        </div>
      }
    </div>
  )
}
