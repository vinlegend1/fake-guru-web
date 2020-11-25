import React, { useContext } from 'react'
import Layout from 'src/components/Layout';
import { AuthContext } from '../context/authContext'

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <Layout>
            <div>{user?.username}</div>
            <div>{user?.email}</div>
            <div>{user?.id}</div>
        </Layout>
    )
}

export default Home
