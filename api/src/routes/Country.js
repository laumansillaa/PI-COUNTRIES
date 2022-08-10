require ('dotenv').config();
const {Router} = require('express');
// const axios = require('axios').default;
const {Op} = require('sequelize')
const {Country, Exercise} = require('../db');

const router = Router();


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

    } catch (error) {
        next(error)
    }


})


// router.get('/countries/:name')








module.exports = router