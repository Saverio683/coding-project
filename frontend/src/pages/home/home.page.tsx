import { Fragment } from 'react'

import { useAppSelector } from '../../redux/hooks'

import CountryDashboard from '../../components/country-dashboard/country-dashboard.component'
import SearchBox from '../../components/search-box/search-box.component'
import GoBack from '../../components/go-back/go-back.component'

import './home.styles.scss'

const HomePage = () => {
    const { searchResult } = useAppSelector(state => state.countries)
    return (
        <div className='home-page'>
        {
            searchResult ?
                <Fragment>
                    <CountryDashboard />
                    <GoBack />
                </Fragment>
            :
                <SearchBox />
        }
        </div>
    )
}

export default HomePage