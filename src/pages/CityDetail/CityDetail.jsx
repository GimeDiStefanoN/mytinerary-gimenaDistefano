
import './CityDetail.css';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CityDetail = () => {
  const { id } = useParams();

  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/cities/${id}`)
      .then((response) => {
        setCityData(response.data.oneCity); 
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const itinerariesSection = useRef()
  const scrollToItineraries = () => {
    console.log('Botón "View Itineraries" clickeado');
    itinerariesSection.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="containViews">
      <div className="containDetail">
        {loading ? (
          <Loading />
        ) : (
          <div className="containImg" style={{backgroundImage: `url(${cityData.png})`}}>
            <div className="containText">
            <h1 className="titleView">{cityData.name}</h1>
            <div className="textDesc">
              <p className="description">{cityData.description}</p>
            </div>

            </div>
            <Button  btnItinClassName="btnItin" text="View Itineraries" onClick={scrollToItineraries}/>
          </div>
        )}

        <div className="itinerariesSection" ref={itinerariesSection}>

        <h2 className="subtitleView" id="itineraries">Web Under Construction</h2>

          <Loading/>
        </div>

        <Link to={'/cities'}>
          <Button text="Back to Cities" />
        </Link>
      </div>
    </div>
  );
};

export default CityDetail;
