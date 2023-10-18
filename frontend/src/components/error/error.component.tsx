import GoBack from '../go-back/go-back.component'

import './error.styles.scss'

type Props = {
    statusCode: number
}

const Error = ({ statusCode }: Props) => {
    //I considered 2 types of image: for server error and for no result found
    const url = statusCode < 500 && statusCode >= 400 ? 
        'https://i.ibb.co/Sr9n5dT/error.webp' 
    : 
        'https://i.ibb.co/D1WQ6J8/server-error.webp'
    return (
        <div className='error'>
            <img src={url} className='error-image' alt='error' width='50%' height='auto' />
            <GoBack />
        </div>
    )
}

export default Error