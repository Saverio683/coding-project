import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import countryRouter from './routes/countries/countries.route' 

const app: Express = express()

const corsOptions: cors.CorsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
app.use(express.json({limit: '500mb'}))

const PORT: number = parseInt(process.env.PORT || '4000', 10)

app.use('/countries', countryRouter)
app.listen()

export default app