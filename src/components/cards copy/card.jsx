import React from 'react';
import CardItemInfo from './carditem';
import './card.css';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/imginfo.jpg';

function CardInfo() {
  return (
    <div className='cards'>
        <h1>Sobre nosotros</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItemInfo
                    src={img2}
                    text='Nuestra misión'
                    label='Información'
                    path='/'
                    />
                    <CardItemInfo
                    src={img4}
                    text='¿Que es Medicare?'
                    label='Quienes somos'
                    path='/'
                    />
                    <CardItemInfo
                    src={img3}
                    text='Nuestras sedes'
                    label='Sedes'
                    path='/'
                    />
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default CardInfo