import './Cities.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import Hero from '../../components/Hero/Hero';

const Cities = () => {
  const cities = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
]
  return (
    <div className="containViews">
        <Hero
          backgroundImage="https://fd8031780d.clvaw-cdnwnd.com/1b1d575f07be29b29f4536ea06363a0a/200000043-59c3459c36/paisaje-patrimonio%20cultural-turismo.jpg?ph=fd8031780d"
          titleHero="Cities"
          textHero="Find that city that most attracts you to visit and explore everything you can know"
          showButton={false}
        />

        <h2 className='subtitleView'>Web Under Construction </h2>

        <Loading/>

        <div className="contenedorCards">
          { cities.map((city) => {
            return (
              <Link key={city.id} to={`/cities/${city.id}`} className='containCard'>
                      <div >
                        <h4 className='titleCard'>Card City</h4>
                        <Button text='Go'/> 
                      </div>
                  </Link>
                )
              })
            }
        </div>
       
    </div>
  )
}

export default Cities