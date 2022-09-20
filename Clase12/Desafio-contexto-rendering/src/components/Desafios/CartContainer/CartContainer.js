import React, {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import {Link} from "react-router-dom";

export const CartContainer = () => {
  const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
  console.log(productCartList)
  return (
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
  )
}
