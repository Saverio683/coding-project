import './coutnry-dashboard.styles.scss'

import { useAppSelector } from '../../redux/hooks'

const CountryDashboard = () => {
    const { searchResult } = useAppSelector(state => state.countries)
    //expression "searchResult?.capital" is used to handle the possibility of errors, 
    //checking whether searchResult contains the data
    return searchResult?.capital ? (
        <div className='country-dashboard'>
            <span className='name'>{searchResult?.name}</span>
            <img src={searchResult?.flag} alt='flag' width='60%' height='auto' />
            <div className='row'>
                <span><b>OFFICIAL NAME</b>: {searchResult?.official}</span>
                <span><b>CAPITAL(S)</b>: {searchResult?.capital.join(', ')}</span>
                <span><b>REGION</b>: {searchResult?.region}</span>
                <span><b>CURRENCY</b>: {searchResult?.currencyName} ({searchResult?.currencyValue})</span>
                <span><b>LANGUAGES</b>: {searchResult?.languages.join(', ')}</span>
            </div>                        
        </div>
    ) : null
}

export default CountryDashboard