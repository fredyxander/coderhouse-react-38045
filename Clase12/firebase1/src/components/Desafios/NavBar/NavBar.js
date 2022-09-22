import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import mario from '../../../assets/mario.png';
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <div>
                <Link to="/">
                    <img className="nav-brand" src={mario} alt="logo"/>
                </Link>
            </div>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/contacto">Contacto</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/camisas">camisas</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/zapatos">zapatos</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
