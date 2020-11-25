import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div>{user?.username}</div>
            <div>{user?.email}</div>
            <div>{user?.id}</div>
        </div>
    )
}

export default Home
