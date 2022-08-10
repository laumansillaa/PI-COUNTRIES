import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postActivity, getCountries } from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import World from '../styles/assets/World.svg'
import '../styles/CreateActivity.css'
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

            <div className= 'container-create'>
                <div className='create-nav'>
                    <Link to='/home'><button className='create-select'>HOME</button></Link>
                    <div className='create-title'>
                        <h1>CREA LA ACTIVIDAD!</h1>
                    </div>
                </div>
                <div className='cont-form-body'>
                    <div className='f-form'>
                        <div className='cont-form'>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <h1 className='form-title'>INGRESE LOS DATOS</h1>
                                <div className='form-country'>
                                    <div className='form-label'>
                                        <label>Pais: </label>
                                    </div>
                                    <div>
                                        <select onChange={(e) => handleSelect(e)} className= 'form-select'>
                                            <option>Elegir pais</option>                                                  
                                            {countries.map((e) => (
                                                <option key={e.name} value={e.name} > {e.name} </option>
                                            ))}
                                        </select>  
                                        {errors.countryId && (
                                            <p className= 'error'>{errors.countryId}</p>
                                        )}
                                    </div>
                                </div>
                                <div className='cont-section-form'>
                                    <div className='form-label'>
                                        <label >Nombre: </label>
                                    </div>
                                    <input type= 'text' value={input.name} name= 'name' onChange={(e) => handleChange(e)} className='form-input'/>
                                    {errors.name && (
                                        <p className= 'error'>{errors.name}</p>
                                    )}
                                </div>
                                <div className='cont-section-form'>
                                    <div className='form-label'>
                                        <label >Dificultad: </label>
                                    </div>
                                    <input type='number' value= {input.difficulty} name= 'difficulty' onChange={(e) => handleChange(e)} className= 'form-input'/>
                                    {errors.difficulty && (
                                        <p className= 'error'>{errors.difficulty}</p>
                                    )}
                                </div>
                                <div className='cont-section-form'>
                                    <div className='form-label'>
                                        <label >Duracion: </label>
                                    </div>
                                    <input type= 'text' value= {input.duration} name= 'duration' onChange={(e) => handleChange(e)} className= 'form-input'/>
                                    {errors.duration && (
                                        <p className= 'error'>{errors.duration}</p>
                                    )}
                                </div>
                                <div className='form-country'>
                                    <div className='form-label'>
                                        <label>Temporada: </label>
                                    </div>
                                    <select name= 'season' value= {input.season} onChange={(e) => handleChange(e)} className= 'form-select'>
                                        <option value="verano">Verano</option>
                                        <option value= 'otoño' >Otoño</option> 
                                        <option value= 'invierno'>Invierno</option>  
                                        <option value= 'primavera'>Primavera</option>                     
                                    </select>
                                    {errors.season && (
                                        <p className= 'error'>{errors.season}</p>
                                    )}                        
                                </div>
                                <div className='form-label'>
                                    {input.country.map(e => (
                                        <h3>{e}</h3>
                                    ))}
                                </div>
                                <div className='cont-section-form'>
                                    <button type='submit' className='createbutton'>CREAR ACTIVIDAD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='cont-img'>
                        <img src={World} 
                        alt='img-notfound'
                        className='img-create'/>
                    </div>
                </div>
            </div>

    )




}