const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routecountry = require ('./Country')
const routeexercise = require ('./Exercise');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', routecountry)
router.use('/', routeexercise)



module.exports = router;
