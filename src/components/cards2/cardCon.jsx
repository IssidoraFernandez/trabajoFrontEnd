import React from 'react';
import CardItem from './carditem';
import './cardCon.css';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/imginfo.jpg';

function CardCon() {
  return (
    <div className='cards'>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem
                    src={img2}
                    text='Contacta a los mejores medicos de la ciudad'
                    label='Contacto'
                    path='/informacion'
                    />
                    <CardItem
                    src={img4}
                    text='¿Tienes alguna consulta? Contactanos en el siguiente link'
                    label=''
                    path='/'
                    />
                    <CardItem
                    src={img3}
                    text='Siguenos en nuestras redes sociales'
                    label=''
                    path='/'
                    />
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default CardCon