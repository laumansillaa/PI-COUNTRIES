import React from "react";

export default function Paginado ({countriesPerPage, allCountries, paginado}){
    const pageNumber = []

    for (let i = 1; i<=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i )
    }

    return (
        
            <div>
                {pageNumber &&
                pageNumber.map(number => {
                    return (
                        
                        <span onClick = {() => paginado(number)} className= 'paginado-button'> {number} </span>
                        
                    )
                })}
            </div>
    
    )
}