import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function CardItemInfo(props) {
  return (
    <>
    <li className='cards-item'>
        <Link className='cards-link' to={props.path}>
            <figure className='cards-pic' data-category={props.label}>
                <img 
                src={props.src} 
                alt="" 
                className="cards-img"/>
                <div className="cards-info">
                    <h5 className="cards-text">{props.text}</h5>
                </div>
            </figure>
        </Link>
    </li>
    </>
  )
}

export default CardItemInfo