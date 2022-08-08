import React from 'react';
import { Link } from 'react-router-dom';
import image from '../styles/assets/image.png'
import '../styles/LandingPage.css'

export default function LandingPage() {
    return (

        <div className= 'landingPage'>
            <h1 className= 'h1landing'>Bienvenidos a mi pagina</h1>
            <div>
                <img src={image} alt='imagenotfound' className='img-landing' />
            </div>
            <Link to='/home' >
                <button className= 'button-landing'> Ingresar </button>
            </Link>
        </div>

    )
}