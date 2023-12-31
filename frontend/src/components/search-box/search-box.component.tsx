import { useState, FormEvent, useEffect } from 'react'

import { fetchCountry } from '../../redux/countries/countries.slice'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

import './search-box.styles.scss'

const SearchBox = () => {
    const { countries } = useAppSelector(state => state.countries)
    const [serchSuggeriments, setSearchSuggeriments] = useState<string[]>([])
    const [index, setIndex] = useState<number>(0)
    const dispatch = useAppDispatch()

    //to detect when the down or up arrow key is pressed
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp') {
                setIndex(prevIndex => Math.max(prevIndex - 1, 0))
            } else if (e.key === 'ArrowDown') {
                setIndex(prevIndex => Math.min(prevIndex + 1, serchSuggeriments.length - 1))
            }
        }
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [serchSuggeriments])

    const handleInputSearch = (e: any) => {
        const { value } = e.target
        //suggestions only start appearing after entering at least 2 letters, this is a conventional choice 
        if(value && value.length > 1) {
            const result = countries?.filter(country => country.toLowerCase().includes(value))
            if(result?.length) {
                setSearchSuggeriments(result)
                setIndex(0)
            }
            else {
                setSearchSuggeriments([])
                setIndex(0)
            }
        } else {
            setSearchSuggeriments([])
            setIndex(0)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        //dispatch the element you set on with the arrows, or the first suggestion
        e.preventDefault()
        if(serchSuggeriments.length)
            dispatch(fetchCountry(serchSuggeriments[index]))
        else {
            const input = e.currentTarget.elements[0] as HTMLInputElement
            dispatch(fetchCountry(input.value))
        }
    }

    return (
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
                <input 
                    list='countries'
                    type='text' 
                    placeholder='Search a country'
                    required 
                    onChange={handleInputSearch}
                />
                <button type='submit'>
                    <img src='https://i.ibb.co/7yT56wy/ico.webp' alt='icon' />
                </button>
            </form>
            <div className='scroll-ct'> 
            {
                serchSuggeriments.map((s, i) => (
                    <span 
                        key={i} 
                        onClick={() => dispatch(fetchCountry(serchSuggeriments[i]))}
                        className={`search-suggeriment ${index === i ? 'selected' : ''}`}
                    >
                        {s}
                    </span>
                ))
            }
            </div>
        </div>
    )
}

export default SearchBox