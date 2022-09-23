/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { arregloProductos } from "../../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';
import { db } from "../../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ()=>{
    const {categoryId} = useParams();
    console.log('categoryId',categoryId)
    const [productos, setProductos] = useState([]);

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(arregloProductos);
    //     }, 2000);
    // })

    // useEffect(()=>{
    //     promesa.then(resultado=>{
    //         if(categoryId){
    //             const newProducts = resultado.filter(item=>item.categoria === categoryId);
    //             setProductos(newProducts)
    //         } else{
    //             setProductos(resultado)
    //         }
    //     })
    // },[categoryId])

    useEffect(()=>{
        //creamos la referencia de la coleccion.
        const queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"),where("categoria","==",categoryId));
        getDocs(queryRef).then(response=>{
            const resultados = response.docs.map(doc=>{
                // console.log(doc.data())
                // console.log(doc.id)
                const newItem ={
                    id:doc.id,
                    ...doc.data(),
                }
                return newItem
            });
            console.log(resultados)
            setProductos(resultados);
        })
    },[categoryId])

    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}