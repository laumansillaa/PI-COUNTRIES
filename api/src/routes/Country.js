require ('dotenv').config();
const {Router} = require('express');
const axios = require('axios').default;
const {Op} = require('sequelize')
const {Country, Exercise} = require('../db');

const router = Router();


// const getAllInfo = async () => {
//     const apiurl = await axios.get ("https://restcountries.com/v3/all");
//     //console.log("CONSOLE.LOG", apiurl)
//     const apiinfo = awaitapiurl.data.map(e => {
//         return Country.findOrCreate({
//             name: e.name.common,
//             id: e.cca3,
//             capital: e.capital? e.capital[0] : "-",
//             region: e.region,
//             subregion: e.subregion,
//             area: e.area,
//             population: e.population,
//             flags: e.flags[1]
//         })
//     })
    
//     return apiinfo;
// }



router.get('/countries', async (req, res, next) => {

    const {name} = req.query

    if (name) {
        try {
            const countries = await Country.findAll({where:{
                name: {[Op.iLike] : `%${name}%`} 

            }})
            res.json(countries)
        } catch (error) {
            res.json(error)
        }

    } else {
        try {
            const countries = await Country.findAll()
            res.json(countries)
        } catch (error) {
            res.json({msg: 'No se encontraron resultados'})
        }
    }
})



router.get('/countries/:id', async (req, res, next) => {
    const {id} = req.params;

    const aux = id.toUpperCase()
    

    try{
        let country = await Country.findByPk(aux, {
            include: Exercise
        })

        res.json(country)

        // let idcountry = allcountry.filter(e => e.id.toLowerCase() === id.toLowerCase(), {
        //     include : [{
        //         model: Exercise
        //     }]
        // } )
        // idcountry.length ? 
        // res.status(200).json(idcountry) :
        // res.status(404).send('No se encontraron resultados')
    } catch (error) {
        next(error)
    }


})


// router.get('/countries/:name')








module.exports = router