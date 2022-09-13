import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        console.log("hizo click", dato);
        setContador(dato)
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
                <h6>{contador}</h6>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}