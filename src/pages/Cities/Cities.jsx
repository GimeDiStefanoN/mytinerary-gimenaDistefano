import './Cities.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../../store/actions/cityActions'


const Cities = () => {
  
  const [searchValue, setSearchValue] = useState('');
  let inputSearch =useRef();
  const cities = useSelector((store)=> store.cityReducer.cities);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cityReducer.loading);
  const errorCity = useSelector((state) => state.cityReducer.error);
  
  useEffect(() => {
    dispatch(get_cities())
  }, [dispatch]);
  
  
  const handleInputChange= () =>{
    dispatch(filter_cities({ value: inputSearch.current.value.trim()}))
  };
  
  
  return (
    <div className="containViews">
        <Hero
          backgroundImage="https://fd8031780d.clvaw-cdnwnd.com/1b1d575f07be29b29f4536ea06363a0a/200000043-59c3459c36/paisaje-patrimonio%20cultural-turismo.jpg?ph=fd8031780d"
          titleHero="Cities"
          textHero="Find that city that most attracts you to visit and explore everything you can know"
          showButton={false}
          titleHeroClassName="cities-titleHero" 
          textHeroClassName="cities-textHero"   
          />

        <div className="form-control contenedorBuscador">
          
            <input 
              ref={inputSearch}
              type="text" 
              placeholder="Search your City" 
              className="input input-bordered w-24 md:w-auto" 
              value={searchValue}  
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleInputChange();
                }
              }}
              /> 
            <button onClick={handleInputChange}>  
              <img  className='lupa' src="/Icons/magnifying-glass-solid.svg" alt="" />
            </button>
        </div>

        

        <div className="contenedorCards">
        {loading ? (
          <Loading /> 
        ) : 
          errorCity ? (
            <p className='errorMsgCity'>No city found 😕</p>
          ) : (
            cities?.map((city) => {
              return (
                <Link key={city._id} to={`/cities/${city._id}`} className='containCard'>
                  <Card
                  png={city.png}
                  alt={city.alt}
                  name={city.name}
                  country={city.country}
                  description={city.description}
                  />
                </Link>
                  )
                }))

        }
          
            
        </div>
       
    </div>
  )
}

export default Cities
