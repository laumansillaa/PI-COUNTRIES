import React from "react";
import {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, filterByContinent, filterByname, filterByPopulation, getActivity, filterByActivity } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import '../styles/Home.css'



export default function Home () {

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.country)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(9)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCounetry = indexOfLastCountry - countriesPerPage 
    const currentCountry = allCountries.slice(indexOfFirstCounetry, indexOfLastCountry) 
    const allActivity = useSelector((state) => state.activity)



    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivity())

    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries())
    }

    function handleFilterContinent (e) {
        //e.preventDefault()
        dispatch(filterByContinent(e.target.value))
        setCurrentPage(1)
    }

    function handleSortByName(e ){
        e.preventDefault()
        dispatch(filterByname(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)

    }

    function handleSortByPopulation(e){
        e.preventDefault()
        dispatch(filterByPopulation(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }


    function handleFilterActivity(e){
        e.preventDefault()
        dispatch(filterByActivity(e.target.value))
        setCurrentPage(1)

    }






    return (
        <div className= 'homecss'>
            <div className= 'nav'> 
                <div className= 'title-home'>
                    <h2> PROYECT COUNTRIES </h2>  
                </div>                
                <div className= 'nav1'>
                    <div className='cont-item-nav'>
                        <button onClick= {e => {handleClick(e)}} className='select' >RECARGAR PAISES</button>
                    </div>
                    <div className='cont-item-nav'>
                        <Link to= '/activity' ><button className= 'select'>CREAR ACTIVIDAD</button></Link>
                    </div>
                    <div className='cont-item-nav'>
                        <Link to= '/'><button className= 'select'>LANDING PAGE</button></Link>
                    </div>
                    <div className='cont-item-nav'>
                        <SearchBar />
                    </div>
                </div>
               
                <div className= 'navbar'>
                    <div>
                        <select onChange= {e => handleSortByName(e)} className='select' >
                            <option> Ordenar por nombre </option>
                            <option value= 'asc' >A - Z</option>
                            <option value= 'desc' >Z - A</option>
                        </select>
                    </div>
                    <div>
                        <select onChange= {e => handleSortByPopulation(e)} className='select' > 
                            <option> Ordenar por poblacion </option>
                            <option value='mayor' > Menor a mayor </option>
                            <option value='menor'> Mayor a menor </option>
                        </select>
                    </div>
                    <div>
                        <select onChange= {e => handleFilterContinent(e)} className='select' >
                            <option value= 'all'> Todos </option>
                            <option value= 'Americas' > America </option>
                            <option value= 'Europe' > Europa </option>
                            <option value=  'Asia' > Asia </option>
                            <option value= 'Africa' > Africa </option>
                            <option value= 'Oceania' > Oceania </option>
                        </select>
                    </div>
                    <div>
                        <select onChange= {e => handleFilterActivity(e)} className='select' >
                            <option value= 'all'> Actividad turistica </option> 
                            {allActivity.map(e => {
                                return (
                                    <option key= {e.id} value= {e.name} >{e.name}</option>
                                )
                            })}                       
                        </select>
                    </div>
                </div>
                <div className= 'subnav'>
                        <Paginado countriesPerPage= {countriesPerPage} 
                         allCountries={allCountries.length}
                         paginado = {paginado}/>
                </div>
            </div>            
            <div className= 'containercard'>
                {
                    currentCountry?.map(e => {
                        return (
                            <Card key={e.id} country= {e} style={{ textDecoration: 'none'}} />
                        )
                        
                    })
                }
            </div>
        </div>
    )
}