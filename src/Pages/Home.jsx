import React from 'react'
import Header from '../Components/Layout/Header/Header'
import Testing from './Testing'
import Featured from '../Components/Layout/Featured/Featured'
import HandPicked from '../Components/Layout/HandPicked/HandPicked'
import FooterSection from '../Components/Layout/FooterSection'

const Home = () => {
    return (
        <>  
            <Header />
            <Featured/>
            <HandPicked/>
            <FooterSection/>


        </>
    )
}

export default Home