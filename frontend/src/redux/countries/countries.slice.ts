import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type Country = {
    name: string
    official: string
    currencyName: string
    currencyValue: string
    capital: string[] //multiple capitals, e.g: South Africa
    region: string
    languages: string[]
    flag: string
}
// Define the initial state using that type
const initialState: {
    countries?: string[] 
    searchResult?: Country
    loading: boolean
    error?: any 
} = {
    loading: false
}

const BASE_URL = process.env.REACT_APP_BASE_URL
console.log(BASE_URL)

export const getAllCountriesName = createAsyncThunk(
    'countries/getAll',
    async () => {
        try {
            const response = await axios.get(`${BASE_URL}/countries/all`)
            return (response.data) as any
        } catch(err: any) {
            return { response: err.response }
        }
    }
)

export const fetchCountry = createAsyncThunk(
    'countries/fetch',
    async (country: string) => {
        try {
            const response = await axios.get(`${BASE_URL}/countries/find/${country}`)
            return (response.data) as any
        } catch(err: any) {
            return { response: err.response } //server response, containing status code for Error component
        }
    }
)

export const countrySlice = createSlice({
    name: 'countries',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        removeError: state => {
            state.error = undefined
        },
        clearSearchResult: state => {
            state.searchResult = undefined
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCountry.pending, state => {
            state.loading = true
            state.error = undefined
        })
        builder.addCase(fetchCountry.rejected, (state, { error }) => {
            state.loading = false
            state.error = {
                ...error,
                response: (error as any).response 
            }
        })
        builder.addCase(fetchCountry.fulfilled, (state, { payload }) => {
            state.loading = false
            if(payload.response) {
                state.error = payload.response
                state.searchResult = undefined
            } else {
                state.error = undefined
                state.searchResult = payload
            }
        })
        builder.addCase(getAllCountriesName.pending, state => {
            state.loading = true
            state.error = undefined
        })
        builder.addCase(getAllCountriesName.rejected, (state, { error }) => {
            state.loading = false
            state.error = error
        })
        builder.addCase(getAllCountriesName.fulfilled, (state, { payload }) => {
            state.loading = false
            state.error = undefined
            state.countries = payload
        })        
    }
})

export const { removeError, clearSearchResult } = countrySlice.actions
export default countrySlice.reducer
