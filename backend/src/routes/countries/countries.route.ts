import { Router, Request, Response } from 'express'
import axios from 'axios'

import { Country } from '../../models/country/country.model'

const countryRouter = Router()

countryRouter.get('/find/:name', async (req: Request, res: Response) => {
    try {
        const { name } = req.params
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        const data = response.data[0]


        const languages: string[] = []
        for(const lang in data.languages)
            languages.push(lang)

        let currencies
        if(data.currencies)
            currencies = data.currencies[Object.keys(data.currencies)[0]]

        const result: Country = {
            name: data.name.common,
            official: data.name.official,
            capital: data.capital,
            flag: data.flags.png, 
            languages,
            currencyName: currencies.name,
            currencyValue: currencies.symbol,
            region: data.region
        }


        return res.send(result)
    } catch(err: any) {
        if (err.response && err.response.status >= 400 && err.response.status < 500) {
            // Invia il codice di errore 4xx dalla risposta Axios
            return res.status(err.response.status).send({ error: err  })
        } else {
            console.error(err)
            return res.status(500).send('Internal server error')
        }
    }
})

countryRouter.get('/all', async (_: Request, res: Response) => {
    try {
        const result: string[] = []
        const response = await axios.get(`https://restcountries.com/v3.1/all`)
        response.data.map((d: { name: { common: string } }) => result.push(d.name.common))
        result.sort((a, b) => a.localeCompare(b))  

        return res.send(result)
    } catch(err) {
        console.error(err)
        return res.status(500).send('Internal server error')
    }
})

export default countryRouter