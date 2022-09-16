import Carrito from '../../../assets/carrito.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = ()=>{
    const {getTotalProducts} = useContext(CartContext);
    return(
        <div>
            <Link to="/cart">
                <img src={Carrito} alt="mario" style={{width:20}}/>
                <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"20px", color:"black"}}>{getTotalProducts()}</span>
            </Link>
        </div>
    )
}