import './Cities.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import cities from '../../data/cities.json';

const Cities = () => {
 
  return (
    <div className="containViews">
        <Hero
          backgroundImage="https://fd8031780d.clvaw-cdnwnd.com/1b1d575f07be29b29f4536ea06363a0a/200000043-59c3459c36/paisaje-patrimonio%20cultural-turismo.jpg?ph=fd8031780d"
          titleHero="Cities"
          textHero="Find that city that most attracts you to visit and explore everything you can know"
          showButton={false}
        />

        <Search/>

        <div className="contenedorCards">
          {cities.cities.map((city) => {
            return (
              <Link key={city.id} to={`/cities/${city.id}`} className='containCard'>
                <Card
                png={city.png}
                alt={city.alt}
                name={city.name}
                country={city.country}
                description={city.description}
                />
              </Link>
                )
              })
            }
        </div>
       
    </div>
  )
}

export default Cities