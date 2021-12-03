import React from "react";

export default function Paginado ({countriesPerPage, allCountries, paginado}){
    const pageNumber = []

    for (let i = 1; i<=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i )
    }

    return (
        <nav>
            <ul>
                {pageNumber &&
                pageNumber.map(number => {
                    return (
                        <a className= 'number' key={number} >
                            <a onClick = {() => paginado(number)}> {number} </a>
                        </a>

                    )
                })}
            </ul>
        </nav>
    )
}