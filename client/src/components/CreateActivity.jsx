import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postActivity, getCountries } from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
 //import axios from 'axios';



function validate (input) {    
    let errors= {};

    if(!input.name){
        errors.name = "Se requiere un nombre"
    } else if (input.difficulty > 5 || input.difficulty < 1) {
        errors.difficulty = "Se requiere dificultad entre 1 - 5"
    } else if (!input.duration) {
        errors.duration = "Se requiere duracion"
    } else if (!input.season) {
        errors.season = "Se requiere una temporada"
    }
    return errors;
}


export default function CreateActivity() {
    const dispatch= useDispatch()
    const history = useHistory()
    const countries= useSelector((state) => state.country)
    //const [countryId, setCountryId] = useState([])
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({        
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: []
    })

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    function handleChange(e){
        // if(e.target.name === 'countryId') {
        //     setCountryId([...countryId, e.target.value])
        // } 
       
            setInput({
                ...input,
                [e.target.name] : e.target.value
            })
        
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSelect(e){
        if(!input.country.includes(e.target.value)){
            setInput({
                ...input,
                country: [...input.country, e.target.value]
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        // const obj = {
        //     ...input,
            
        // }
        //console.log("CONSOLE LOG POST --->",input)
        if(!Object.getOwnPropertyNames(errors).length && input.name && input.difficulty && input.duration && input.season.length && input.country.length){
            //console.log("LLEGUEE")
            //var json= await axios.post("http://localhost:3001/activity", obj)
            dispatch(postActivity(input))
            alert('Actividad creada!')
            setInput({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                country: []
            })
            // setCountryId([])
            history.push('/home')
        } else {
            alert ("No se pudo crear la actividad")
        }
    }


    return (
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <div>
                <h1>Crea la actividad!</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Pais: </label>
                    <select onChange={(e) => handleSelect(e)}>
                        <option>Elegir pais</option>                                                  
                        {countries.map((e) => (
                            <option key={e.name} value={e.name} > {e.name} </option>
                        ))}
                    </select>  
                    {errors.countryId && (
                        <p className= 'error'>{errors.countryId}</p>
                    )}
                     
                </div>
                <div>
                    <label>Nombre: </label>
                    <input type= 'text' value={input.name} name= 'name' onChange={(e) => handleChange(e)} />
                    {errors.name && (
                        <p className= 'error'>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Dificultad: </label>
                    <input type= 'number' value= {input.difficulty} name= 'difficulty' onChange={(e) => handleChange(e)}/>
                    {errors.difficulty && (
                        <p className= 'error'>{errors.difficulty}</p>
                    )}
                </div>
                <div>
                    <label>Duracion: </label>
                    <input type= 'text' value= {input.duration} name= 'duration' onChange={(e) => handleChange(e)}/>
                    {errors.duration && (
                        <p className= 'error'>{errors.duration}</p>
                    )}
                </div>
                <div>
                    <label>Temporada: </label>
                    <select name= 'season' value= {input.season} onChange={(e) => handleChange(e)} >
                        <option value="verano">Verano</option>
                        <option value= 'otoño' >Otoño</option> 
                        <option value= 'invierno'>Invierno</option>  
                        <option value= 'primavera'>Primavera</option>                     
                    </select>
                    {errors.season && (
                        <p className= 'error'>{errors.season}</p>
                    )}
                </div>
                {/* <ul><li>{input.season.map(e => e + '  ')}</li></ul> */}
                <div>
                    <button type='submit'>Crear actividad!</button>
                </div>
            </form>


        </div>
    )




}