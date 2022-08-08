const initialState = {
    country : [],
    allCountry: [],
    activity: [],
    detail: [],

}



function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_COUNTRIES' :
            return {
                ...state,
                country: action.payload,
                allCountry: action.payload
            }
            
        case 'GET_NAME_COUNTRY' :
            return {
                ...state,
                country: action.payload
            }


        case 'FILTER_BY_CONTINENT': 
            const allcountries = state.allCountry
            const continentfilter = action.payload === 'all' ? allcountries : allcountries.filter(e => e.region === action.payload)
            return {
                ...state,
                country: continentfilter
            } 
        case 'GET_ACTIVITY':
            return {
                ...state,
                activity: action.payload
            }


        case 'POST_ACTIVITY':
            return {
                ...state
            }

        case 'FILTER_BY_ACTIVITY': 
        const activity = state.activity
        const actfilter = activity.filter(e => e.name === action.payload)[0].countries.map(e => e)
            // const activity = state.country.filter(e => {
            //     console.log("ENTRE", e)
            // if (e.exercises && e.exercises[0].includes(action.payload)) return e
            // prueba
            // })   
            //console.log("SOY EL REDUCER ---> ",activity)
            
            return{
                ...state,
                country: actfilter
            }

        case 'FILTER_BY_NAME':
            
            const filter = action.payload === 'asc' ? 
            state.country.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name){
                    return -1
                }
                return 0                
            }) : 
            state.country.sort(function (a, b){
                if (a.name > b.name){
                    return -1
                }
                if (b.name > a.name){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                country: filter
            }    
               
        case 'FILTER_BY_POPULATION':
            const filterpopulation = action.payload === 'mayor' ?
            state.country.sort(function (a, b){
                if(a.population > b.population){
                    return 1;
                }
                if (b.population > a.population){
                    return -1
                }
                return 0
            }) :
            state.country.sort(function (a,b) {
                if (a.population > b.population){
                    return -1
                }
                if (b.population > a.population){
                    return 1
                }
                return 0
            })
        
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        default :         
             return state
        
    }

}



export default rootReducer;