import './CityDetail.css';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import { useEffect } from 'react';

const CityDetail = () => {
  const { id } = useParams(); //id de mi city


  //tener una variable de estado p almacenar info de la city

  useEffect(()=>{
    //axios para traer info de 1 city
    //usar ID  del user params
  })

  //utilizar la varuiable de estado para renderizar la info
  
  return (
    <div className="containViews">
      <div className="containDetail">
        <h1 className='titleView'>City Detail</h1>

        <h2 className='subtitleView'>Web Under Construction </h2>

        <Loading />

        <h3>City # {id}</h3>

        <Link to={'/cities'}>
          <Button text='Back to Cities' />
        </Link>
      </div>
    </div>
  )
}

export default CityDetail