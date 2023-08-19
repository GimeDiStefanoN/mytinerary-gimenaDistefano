import './Cities.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
//import cities from '../../data/cities.json';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Cities = () => {
 const [cities, setCities]= useState();

  useEffect(()=>{
    axios.get('http://localhost:8000/api/cities?name=')
      .then((res)=> setCities(res.data.allCities))
      .catch((err)=>{console.log(err);})
  },[])


const handleInputChange= async (e) =>{
  const value = e.target.value.trim(); 
  console.log(value);

  try{
    const response = await axios.get(`http://localhost:8000/api/cities?name=${value}`)
    setCities(response.data.allCities)
  }catch(err){
    console.log(err);
  }
}


  return (
    <div className="containViews">
        <Hero
          backgroundImage="https://fd8031780d.clvaw-cdnwnd.com/1b1d575f07be29b29f4536ea06363a0a/200000043-59c3459c36/paisaje-patrimonio%20cultural-turismo.jpg?ph=fd8031780d"
          titleHero="Cities"
          textHero="Find that city that most attracts you to visit and explore everything you can know"
          showButton={false}
        />

        <div className="form-control contenedorBuscador">
            <input type="text" placeholder="Search your City" className="input input-bordered w-24 md:w-auto" onChange={handleInputChange}/>
        </div>

        <div className="contenedorCards">
          {cities?.map((city) => {
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
              })
            }
        </div>
       
    </div>
  )
}

export default Cities