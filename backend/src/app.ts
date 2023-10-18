import express, { Express } from 'express'
import cors from 'cors'
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

import countryRouter from './routes/countries/countries.route' 

const app: Express = express()
const server = http.createServer(app)

const corsOptions: cors.CorsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
app.use(express.json({limit: '500mb'}))

const PORT: number = parseInt(process.env.PORT || '4000', 10)

app.use('/countries', countryRouter)

const startServer = async (): Promise<void> => {
    try {
        server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}...`)
        })
    } catch (err) {
        console.error(err)
    }   
}
startServer()
export default app