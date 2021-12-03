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