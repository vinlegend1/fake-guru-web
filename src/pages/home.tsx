import React from 'react'
import { useIsAuth } from '../utils/useIsAuth'

const Home = () => {

    useIsAuth();
    return (
        <div>
            Home
        </div>
    )
}

export default Home
