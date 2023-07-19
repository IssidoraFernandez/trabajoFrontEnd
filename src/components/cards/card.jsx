import React from 'react';
import CardItem from './carditem';
import './card.css';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/imginfo.jpg';

function Card() {
  return (
    <div className='cards'>
        <h1>Conocenos!</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem
                    src={img2}
                    text='Descubre los mejores medicos de la ciudad'
                    label='Información'
                    path='/informacion'
                    />
                    <CardItem
                    src={img4}
                    text='Agenda tu hora con nosotros'
                    label='Reseva tu hora'
                    path='/reserva'
                    />
                    <CardItem
                    src={img3}
                    text='¿Tienes dudas? Contactanos'
                    label='Información'
                    path='/contacto'
                    />
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Card