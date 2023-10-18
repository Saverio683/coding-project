import express, { Express, Request, Response } from 'express'
import cors from 'cors'

import countryRouter from './routes/countries/countries.route' 

const app: Express = express()

const corsOptions: cors.CorsOptions = {
    origin: "*"
}

app.get('/', async (req: Request, res: Response) => {
    res.send('Ciao')
})

app.use(cors(corsOptions))
app.use(express.json({limit: '500mb'}))

app.use('/countries', countryRouter)

export default app