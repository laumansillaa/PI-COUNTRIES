import React from 'react';
import { Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions';
import { useEffect } from 'react';
import '../styles/Detail.css'


export default function Detail () {
    //console.log(props)
    const {id} = useParams()

    const dispatch = useDispatch()
    const detailcountry = useSelector((state) => state.detail)
    // console.log("Console DETAIL", detailcountry)

    useEffect(() => {
        dispatch(getDetail (id))
    }, [dispatch, id])




    return (
        <div className= 'container'> 
            {
                detailcountry ?
                <div className= 'detail' >
                    <div>
                        <div className='detail-cont-name'>
                            <div className='detail-title'>
                                <h2>{detailcountry.name}</h2>
                            </div>
                            <div>
                                <img src= {detailcountry.flags} alt='flag-not-found'/>
                            </div>
                        </div>
                        <div className='cont-info'>
                            <div className='cont-info-country'>
                                <div className='info'>
                                    <h5>CAPITAL: {detailcountry.capital}</h5>
                                    <h5>HOLA</h5>
                                </div>
                                <div className='info'>
                                    <h5>REGION: {detailcountry.region}</h5>
                                </div>
                                <div className='info'>
                                    <h5>SUBREGION: {detailcountry.subregion}</h5>
                                </div>
                                <div className='info'>
                                    <h5>AREA: {detailcountry.area} Kms2 </h5>
                                </div>
                                <div className='info'>
                                    <h5>POBLACION: {detailcountry.population}</h5>
                                </div>
                            </div>
                            <div className='cont-info-activity'>
                                <div className= 'info'>
                                    <h5>ACTIVIDADES: </h5>
                                    {
                                        detailcountry.exercises?.map(e => {
                                            return (
                                                <div key= {e.id}>
                                                    <h5>Nombre de actividad: {e.name}</h5>
                                                    <h5>Dificultad: {e.difficulty}</h5>
                                                    <h5>Duracion: {e.duration}</h5>
                                                    <h5>Temporada: {e.season}</h5>

                                                </div>
                                            ) 

                                        }) 
                                        
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='cont-button'>
                            <Link to= '/home' style={{ textDecoration: 'none'}}>
                                <buttton className='button' >Volver</buttton>
                            </Link>
                        </div>
                    </div>


                </div> : <p>Loading...</p>
            }
        </div>
    )
}