import React from 'react'
import './Carrousel.css';

const Carrousel = () => {
    return (
        <>
            <h2 className='titleCarousel'>Popular Mytineraries</h2>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/Places/Londres.png" className="w-full" />
                    <img src="/Places/Grecia.png" className="w-full" />
                    <img src="/Places/Roma.png" className="w-full" />
                    <img src="/Places/Paris.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/Places/Turquia.png" className="w-full" />
                    <img src="/Places/Japon.png" className="w-full" />
                    <img src="/Places/Sydney.png" className="w-full" />
                    <img src="/Places/China.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/Places/Argentina.png" className="w-full" />
                    <img src="/Places/Colombia.png" className="w-full" />
                    <img src="/Places/Brasil.png" className="w-full" />
                    <img src="/Places/Eeuu.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrousel