import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { ContactoPage } from './components/Temas/ContactoPage/ContactoPage';
import { CartContainer } from './components/Desafios/CartContainer/CartContainer';
import {ThemeContext} from "./context/ThemeContext";
import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState("")

  return (
    <ThemeContext.Provider value={{texto:texto, setTexto, products:[1,2,3]}}>
      <BrowserRouter>
        <div className="App">
            <div>
              <Navbar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/contacto" element={<ContactoPage/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
                <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<CartContainer/>}/>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
