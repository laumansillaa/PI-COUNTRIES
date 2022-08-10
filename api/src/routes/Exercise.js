require ('dotenv').config();
const {Router} = require('express');
const axios = require('axios').default;
const {Country, Exercise} = require('../db');

const router = Router();


router.post('/activity', async (req, res, next) => {    
    
        const {name, difficulty, duration, season, country} = req.body;
        
        if (!name || !difficulty || !duration || !season || !country){
            res.status(404).send("No se pudo crear la actividad, asegurese de haber ingresado todos los valores.")
        } else {
            let activity = await Exercise.create({
                name,
                difficulty,
                duration,
                season

            })
            //console.log(activity[0])
            //console.log("COUNTRYID: ---> ", country)
    
            
                const match = await Country.findAll({
                    where: {
                        name: country
                    }
                })
                
               activity.addCountry(match)
            
            res.json(activity);
        }

})



router.get('/activity', async (req, res, next) => {
    try {
        const actividad = await Exercise.findAll({
            include: Country
        })
        return res.json(actividad)
    } catch (error){
        next (error)
    }
})









module.exports = router; 