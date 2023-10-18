import { clearSearchResult, removeError } from '../../redux/countries/countries.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import './go-back.styles.scss'

const GoBack = () => {
    const dispatch = useAppDispatch()
    const { searchResult, error } = useAppSelector(state => state.countries)
    const handleClick = () => {
        //clear all project states as in the logo component
        if(searchResult)
            dispatch(clearSearchResult())
        if(error)
            dispatch(removeError())
    }
    return (
        <div 
            className='go-back'
            onClick={handleClick}
        >
            <img src='https://i.ibb.co/7yT56wy/ico.webp' alt='icon' />
        </div>
    )
}

export default GoBack