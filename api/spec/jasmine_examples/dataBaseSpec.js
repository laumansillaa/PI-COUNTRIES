const { Country, Exercise } = require('../../src/db');

describe('Test de prueba', () => {
    describe('Prueba 1', () => {
        it('Prueba 1', () => {
            expect(1).toEqual(1);
        });
    });

})

describe('Prueba 2: DataBase connect', () => {
    describe('Country create', () => {
        it('Country create', () => {
            Country.create({
            id: 'AR',
            name: 'Argentina', 
            capital: 'Buenos Aires', 
            region: 'South America', 
            subregion: 'South America', 
            area: 2780400, 
            population: 4000000, 
            flags: 'https://restcountries.eu/data/arg.svg'
            });
        })
    })
})

describe('Prueba Exercise Model: ', () => {    
    describe('Validators', () => {        
        
        describe('Control type of difficulty', () => {
            it('y', async () => {
                const exercise = await Exercise.create({   
                    name: 'Bicicleta',                     
                    difficulty: 5,
                    duration: '1 hora',
                    season: 'verano'
                })       
 
            })

            it('should throw an error if name is null', (done) => {                
                Exercise.create({})
                  .then(() => done(new Error('It requires a valid name')))
                  .catch(() => done());
            });
        })

        describe('DataTypes', () => {
            it('Control type difficult', async () => {                
                const exerciseAux = await Exercise.create({ 
                name: 'Running',
                difficulty: 5,
                duration: "1 hora",
                season: "verano"
                }); 
                expect(exerciseAux.difficulty).not.toBe("5");
            })

        });


        describe('Control Type DB:', () => {
            it('COntrol DB', (done) => {
                Exercise.create({
                    name: 'Gaming',                
                    duration: "1hr",
                    season: "verano"
                })
                .then(() => done(new Error ('Difficulty is required')))
                .catch(() => done());
            })

            it('Control DB - Update', () => {
                Exercise.findOne({
                    where: {
                        name: 'Running'
                    }
                })
            })

        })
    })

})

