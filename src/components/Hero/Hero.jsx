import React from 'react';
import './Hero.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5 hero-slogan text-3xl font-bold">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <Link to='/cities'><Button text="Explore the cities" /> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero