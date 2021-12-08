import axios from 'axios';


export function getCountries () {
    return async function (dispatch) {
        var json = await axios ('http://localhost:3001/countries');

        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data 
        })

    }
}


// export function getCountries () {
//     return async function (dispatch) {
//         axios.get ('http://localhost:3001/countries')
//         .then(resp => {
//             dispatch({
//                 type: 'GET_COUNTRIES',
//                 payload: resp.data 
//             })
//         })

//     }
// }


export function getActivity() {
    return async function (dispatch) {
        var info = await axios ('http://localhost:3001/activity')
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: info.data
        })
    }
}

// export function getActivity() {
//     return new Promise (
//         function(resolve, reject, dispatch) {
//             if(true){
//                 resolve(   
//                     fetch("http://localhost:3001/activity")                 
//                     .then(r => r.json())
//                     .then(resp => {
//                         dispatch({
//                             type: 'GET_ACTIVITY',
//                             payload: resp
//                         })
//                     })
//                 )
//             } else {
//                 reject("No anduvo nada pa")
//             }
            
//         }
//     )
// }


// export function getActivity() {
//     return function (dispatch) {
//         fetch("http://localhost:3001/activity")
//         .then(r => r.json())
//         .then(resp => {
//             console.log("SOY EL RESP", resp)
//             dispatch({
//                 type: 'GET_ACTIVITY',
//                 payload: resp
//             })
//             console.log("SOY LA PRUEBA",resp)
            
//         }) 
//     }
// }


export function postActivity(payload) {
    return async function (dispatch){
        const info = await axios.post('http://localhost:3001/activity', payload)
        return dispatch ({
            type: 'POST_ACTIVITY',
            payload: info
        })
    }
}


export function filterByContinent(payload){
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}


export function filterByname(payload){
    return {
        type: 'FILTER_BY_NAME',
        payload
    }
}

export function filterByPopulation(payload){
    return {
        type: 'FILTER_BY_POPULATION',
        payload
    }
}

export function filterByActivity(payload) {
    return {
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
}



export function getNameCountry(name) {
    return async function (dispatch){
        
        var json = await axios.get('http://localhost:3001/countries?name=' + name)
        return dispatch({
            type: 'GET_NAME_COUNTRY',
            payload: json.data
        })
    
    }

}


export function getDetail (payload) {
    return async function (dispatch) {        
            var json = await axios.get(`http://localhost:3001/countries/${payload}`)
            //console.log("ACTIONSDETAIL", json)
            return dispatch ({
                type: 'GET_DETAIL',
                payload: json.data
            })
       
    }
}