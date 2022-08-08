import React from "react";
import '../styles/Card.css'
import { Link } from "react-router-dom";

export default function Card ({country}){
    //console.log("VENGO DE CARD ---->", country)
    return (
        <div className= 'card' >
            <div className='title-card'>
                <h3>{country.name}</h3>
            </div>
            <div className = 'image' >
                <img src= {country.flags} alt= 'img not found' className= 'imgcard'/>
            </div>
            <div className= 'region'>
                <h3>{country.region}</h3>
            </div>
            <div>
                <Link to= {`/countries/${country.id}`}><button className='card-button'>Ver mas</button></Link>
            </div>
        </div>
    )
}
