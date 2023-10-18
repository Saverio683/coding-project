import { useEffect } from 'react'

import ParticlesRender from '../components/paricles-render/particles-render.component'
import Loader from '../components/loader/loader.component'
import Error from '../components/error/error.component'
import Logo from '../components/logo/logo.component'
import HomePage from '../pages/home/home.page'

import { getAllCountriesName, clearSearchResult } from '../redux/countries/countries.slice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'

import './App.scss'

const App = () => {
    const dispatch = useAppDispatch()
    const { error, loading } = useAppSelector(state => state.countries)

    useEffect(() => {
        //this call is used to obtain the list of all countries for the search field suggestions
        dispatch(getAllCountriesName())
    }, [dispatch])

    useEffect(() => {
        if(error) {
            //this is particularly useful in the event of a 404 error
            dispatch(clearSearchResult())
        }
    }, [error, dispatch])    

    return (
        <div className='app'>
            {/*logo and dynamic background are always shown*/}
            <Logo />
        {
            loading ?
                <Loader /> 
            : error ?
                <Error statusCode={error.status} />
            :
                <HomePage />
        }
            {/* dynamic background */}
            <ParticlesRender />
        </div> 
    )
}

export default App
