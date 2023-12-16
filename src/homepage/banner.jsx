import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import b1 from "../assets/slide-bg2.jpg"
import b2 from "../assets/slide-bg4.jpg"
import b3 from "../assets/slide-bg5.jpg"
import b4 from "../assets/slide-bg6.jpg"

const banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={b1} />

                </div>
                <div>
                    <img src={b2} />

                </div>
                <div>
                    <img src={b3} />

                </div>
                <div>
                    <img src={b4} />

                </div>
            </Carousel>
        </div>
    )
}

export default banner
