import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

export default function LandingPage() {
    return (
        <div className= 'landingPage'>
            <div className= 'container'>
                <h1 className= 'h1landing'>Bienvenidos a mi pagina</h1>
                <div className= 'home'>
                    <Link to='/home' >
                        <button className= 'button'> Ingresar </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}