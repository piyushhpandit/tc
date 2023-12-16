import React from 'react'
import Navbar from '../navbar/navbar'
import Navbar2 from '../navbar/navbar2'
import Banner from './banner'
import Content from './content'
const homepage = () => {
    return (
        <div>
            <Navbar />
            <Navbar2 />
            <Banner />
            <Content />
        </div>
    )
}

export default homepage
