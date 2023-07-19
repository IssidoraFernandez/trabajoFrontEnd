import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/paginas/inicio';
import Reserva from './components/paginas/reserva';
import Informacion from './components/paginas/info';
import Contacto from './components/paginas/contacto';



function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/"   Component={Inicio}/>
        <Route path='/reserva' Component={Reserva}/>
        <Route path='/informacion' Component={Informacion}/>
        <Route path='/contacto' Component={Contacto} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
