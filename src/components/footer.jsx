import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nosotros</h2>
            <Link to='/'>Información</Link>
            <Link to='/'>Aranceles</Link>
            <Link to='/'>Trabaja con nosotros</Link>
            <Link to='/'>Términos de servicio</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Asistencia</Link>
            <Link to='/'>Reglamento interno</Link>
            <Link to='/'>Deberes y derechos del paciente</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Servicios</h2>
            <Link to='/'>Consultas medicas</Link>
            <Link to='/'>Exámenes </Link>
            <Link to='/'>Videoconsultas</Link>
            <Link to='/'>Centros médicos</Link>
          </div>
        </div>
      </div>
      
        <section class='social-media'>
        <div class='social-media-wrap'>
            </div>
    </section>
    </div>
  );
}

export default Footer;