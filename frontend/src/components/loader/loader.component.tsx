import { BarLoader } from 'react-spinners'

import './loader.styles.scss'

const Loader = () => {
    return (
        <div className='loader'>
            <BarLoader 
                height={10}
                width={'30vw'}
                color='#006efd'
            />
        </div> 
    )
}

export default Loader