import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const[ click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    const closeMenu = () => setClick(false);    

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container container">
            <Link to="/" className="nav-logo" onClick={closeMenu} >
            <FaUserDoctor className="navbar-icon"/>
            Medicare
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-items'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Inicio
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/reserva' className='nav-links' onClick={closeMenu}>
                        Reserva
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/informacion' className='nav-links' onClick={closeMenu}>
                        Información
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/contacto' className='nav-links' onClick={closeMenu}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar