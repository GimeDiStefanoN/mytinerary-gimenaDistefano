import './Hero.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Hero(props) {
    const { backgroundImage, titleHero, textHero, showButton, titleHeroClassName, textHeroClassName  } = props;
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <>
            <div className="hero min-h-screen" style={heroStyle}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className={`mb-5 hero-slogan text-1xl font-bold ${titleHeroClassName}`}>{titleHero}</p>
                        <p className={`mb-5 hero-slogan text-1xl ${textHeroClassName}`}>{textHero}</p>
                        {showButton && <Link to='/cities'><Button text="Explore the cities" /></Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero