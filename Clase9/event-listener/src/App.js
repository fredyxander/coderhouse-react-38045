import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { ContactoPage } from './components/Temas/ContactoPage/ContactoPage';
import { EventListener } from './components/Temas/EventListener/EventListener';

function App() {

  return (
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
              <Route path='/event-listener' element={<EventListener/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
