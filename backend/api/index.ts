import express, { Express } from 'express'
import cors from 'cors'

import countryRouter from './routes/countries/countries.route' 

const app: Express = express()

const corsOptions: cors.CorsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
app.use(express.json({limit: '500mb'}))

app.use('/countries', countryRouter)

export default app