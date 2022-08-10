const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require ('axios');
const {Country} = require ('./src/db.js')



// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {
  try {
      const countryinfo = await Country.findAll()
      if (countryinfo.length < 1){
        const apiinfo = await axios.get('https://restcountries.com/v3/all')
    
        const dbinfo = apiinfo.data?.map(e => {
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
        
        //console.log(dbinfo)
        const getdb = await Country.bulkCreate(dbinfo)

    }
  } catch (error) {
    console.log(error)
  }


  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});
