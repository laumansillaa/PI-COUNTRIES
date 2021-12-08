const getApiInfo = async () => {
    try {
        {
            const getInfo = await axios (`https://restcountries.com/v3/all`)
            //Error ? 
            const info = getInfo.data.map(e => {
                //console.log('CONSOLE LOG', e.flags)
                return {
                    name: e.name.common,
                    id: e.cca3,
                    capital: e.capital? e.capital[0] : "-",
                    region: e.region,
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population,
                    flags: e.flags[1]
        
                }
        
            })
            //console.log("Console: ", info)            
            info.forEach(e => {
                    Country.create({
                    name: e.name.common,
                    id: e.cca3,
                    capital: e.capital? e.capital[0] : "-",
                    region: e.region,
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population,
                    flags: e.flags[1]
                })
                            })

        }

    } catch (error){
        console.log(error)
    }
}




<div>
<select onChange= {e => handleSortArea(e)} >
    <option>Filtro area</option>
    <option value= 'menor'>Mayor a menor</option>
    <option value= 'mayor'>Menor a mayor</option>
</select>
</div>


function handleSortArea(e){
    e.preventDefault()
    dispatch(filtroArea(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
}


export function filtroArea(payload){
    return {
        type: 'FILTER_AREA',
        payload
    }
}

case 'FILTER_AREA':
            const population = action.payload === 'mayor' ?
            state.country.sort(function(a, b){
                if(a.area > b.area){
                    return 1;
                }
                if (b.area > a.area){
                    return -1;
                }
                return 0
            }) :
            state.country.sort(function(a, b){
                if(a.area > b.area){
                    return -1;
                }
                if (b.area > a.area){
                    return 1;
                }
                return 0
            })    


            