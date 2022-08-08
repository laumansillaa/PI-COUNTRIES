import React from "react"
//import { Provider } from "react-redux";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { rest } from "msw"
import {setupServer} from 'msw/node'
import {App} from "../../src/App";
import Home from "../../src/components/Home.jsx"
//import { MemoryRouter, BrowserRouter, Route, Switch } from "react-router-dom";


const server = setupServer(
    rest.get('/home', (req, res, ctx) => {
        return res(
            ctx.json({message: 'PROYECT COUNTRIES'})
        )    
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('App', () => {
    describe('Render Home', () => {
        it('Home render', async () => {
            render(<Home />);
            const title = screen.getByText('PROYECT COUNTRIES');
            expect(title).toBeInTheDocument();
        })
    })

})