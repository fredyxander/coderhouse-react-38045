import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            ...item,
            quantity
        }
        console.log("newProduct", newProduct)
        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
    }

    const removeItem = (itemId)=>{
        console.log("itemId", itemId)
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo)
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}