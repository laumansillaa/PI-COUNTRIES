//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
        //console.log(getdb)

    }
  } catch (error) {
    console.log(error)
  }

  // try {
  //     let apiCountries = await axios.get('https://restcountries.com/v3/all')
      
  //     apiCountries = apiCountries.data.forEach(e => {
  //       return {
  //           name: e.name.common,
  //           id: e.cca3,
  //           capital: e.capital? e.capital[0] : "-",
  //           region: e.region,
  //           subregion: e.subregion,
  //           area: e.area,
  //           population: e.population,
  //           flags: e.flags[1]
  //       }
  //     })
  //     console.log(apiCountries)
  //     await Country.Create(apiCountries)



  // } catch (error) {
  //   error
  // }  

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
