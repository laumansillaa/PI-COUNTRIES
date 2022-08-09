import React from "react";
import '../styles/Paginado.css'


export default function Paginado ({countriesPerPage, allCountries, paginado}){
    const pageNumber = []

    for (let i = 1; i<=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i )
    }

    return (
        
            <div className='con-pagenation'>
                {pageNumber &&
                pageNumber.map(number => {
                    return (
                        <div key={number}>
                            <button onClick={() => paginado(number)} className='page-button'> {number} </button>
                        </div>
                        
                    )
                })}
            </div>

    
    )
}