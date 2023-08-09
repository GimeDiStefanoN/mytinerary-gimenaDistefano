import './Cities.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';

const Cities = () => {
  const cities = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
]
  return (
    <div className="containViews">
        <h1 className='titleView'>Cities</h1>

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