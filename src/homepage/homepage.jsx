import React from 'react'
import Navbar from '../navbar/navbar'
import Navbar2 from '../navbar/navbar2'
import Banner from './banner'
import Content from './content'
import Cards from './cards'
const homepage = () => {
    return (
        <div>
            <Navbar />
            <Navbar2 />
            <Banner />
            <Content />
            <Cards/>

        </div>
    )
}

export default homepage
