const { Country, Exercise } = require('../../src/db');
const supertest = require('supertest')(require('../../src/app'));

describe('Routes', () => {

    describe('/countries', function (){
        it('GET allCountries', function () {
            return supertest
            .get('/countries')
            .expect(200)
            .expect('Content-Type', /json/)
        })

        it('GET countries by name', function () {
            return supertest
            .get('/countries?name=Argentina')
            .expect(200)
            .expect('Content-Type', /json/)
            //.expect(function (res) {
            //     expect(res.body).({
            //     name: 'Argentina',
            //     id: 'ARG',
            //     capital: 'Buenos Aires',
            //     region: 'Americas',
            //     subregion: 'South America',
            //     area: 2780400,
            //     population: 45376763,
            //     flags: 'https://flagcdn.com/w320/ar.png'
            //     })
            // })

        })

        it('GET countries match by name ', function () {
            return supertest
            .get('/countries?name=ar')
            .expect(200)
            .expect('Content-Type', /json/)
            // .expect(function(res) {
            //     var response = res.body
            //     console.log(response)
            // })
        })

        it('GET country by ID', () => {
            return supertest
            .get('/countries/1')
            .expect(   200)
            .expect('Content-Type', /json/)
        })
    })

    describe('/exercises', () =>{
        it('GET allExercises', function () {
            return supertest
            .get('/activity')
            .expect(200)
            .expect('Content-Type', /json/)
        })

        it('POST Excersise - STATUS 404', () => {
            return supertest
            .post('/activity')
            .send({name: 'Running'})
            .expect(404)
        })

        it('POST Excersise - STATUS 404', () => {
            return supertest
            .post('/activity')
            .send({name: 'Running', description: 'Running on the road'})
            .expect(404)
        })

        it('POST Excersise - STATUS 200', () => {
            return supertest
            .post('/activity')
            .send({
                name: 'Running', 
                difficulty: 5, 
                duration: '1 hr', 
                season: 'verano',
                country: 'Argentina'
            })
            .expect(200)
            .expect('Content-Type', /json/)

        })
    })
})