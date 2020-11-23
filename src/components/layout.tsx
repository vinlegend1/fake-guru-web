import { Container } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>Fake Guru Buster</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Container maxWidth="lg">
                <Navbar />
                {children}
            </Container>
        </>
    )
}

export default Layout
