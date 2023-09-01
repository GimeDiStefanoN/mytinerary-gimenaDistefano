import './Cities.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
//import Searcher from '../../components/Searcher/Searcher';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';


const Cities = () => {
  const [cities, setCities]= useState();
  const [errorCity, setErrorCity] = useState(false); 
  const [loading, setLoading] = useState(true); 
  const [searchValue, setSearchValue] = useState('');
  let inputSearch =useRef();
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/cities?name=')
    .then((res) => {
      setCities(res.data.allCities);
      setErrorCity(false);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
      setErrorCity(true);
      setLoading(false);
    });
  }, []);
  
  
  const handleInputChange= async () =>{
    const value = inputSearch.current.value.trim(); 
    console.log(value);
    console.log();
    try {
      const response = await axios.get(`http://localhost:8000/api/cities?name=${value}`);
      setCities(response.data.allCities);
      setErrorCity(false);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (err) {
      if(err.response.status ===404){
        setErrorCity(true);
        setLoading(false);
      }else{
        console.log(err);
      }
    }
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
        ) : (
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

        )}
          
            
        </div>
       
    </div>
  )
}

export default Cities
