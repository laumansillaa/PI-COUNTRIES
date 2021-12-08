import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getNameCountry } from '../actions/index';
import '../styles/SearchBar.css'


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCountry(name))
        setName('')
    }

    return (
        <div>
            <input type= 'text' placeholder= 'Buscar...' onChange= {(e) => handleInputChange(e)} className= 'search' />
            <button type='submit' onClick= {(e) => handleSubmit(e)} className= 'input' >Buscar</button>
        </div>
            
        
    )
}

