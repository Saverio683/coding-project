import { clearSearchResult, removeError } from '../../redux/countries/countries.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import './logo.styles.scss'

const Logo = () => {
    const dispatch = useAppDispatch()
    const { searchResult, error } = useAppSelector(state => state.countries)
    const handleClick = () => {
        //clear all project states to go back to start page (showing search field)
        if(searchResult)
            dispatch(clearSearchResult())
        if(error)
            dispatch(removeError())
    }
    return ( 
        <img 
            className='logo' 
            src='https://i.ibb.co/jHLRMbV/icon.webp' 
            alt='logo' 
            width='8%' 
            onClick={handleClick}
            height='auto' 
        />
    )
}

export default Logo