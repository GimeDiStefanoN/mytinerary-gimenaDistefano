
import './CityDetail.css';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faHeart, faMoneyBill1, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const CityDetail = () => {
  const { id } = useParams();

  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorItinerary, setErrorItinerary] = useState(false);

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
          <div className="containImg" style={{ backgroundImage: `url(${cityData.png})` }}>
            <div className="containText">
              <h1 className="titleView">{cityData.name}</h1>
              <div className="textDesc">
                <p className="description">{cityData.description}</p>
              </div>

            </div>
            <Button btnItinClassName="btnItin" text="View Itineraries" onClick={scrollToItineraries} />
          </div>
        )}

        <section className="itinerariesSection" ref={itinerariesSection}>

          <h2 className="titleSection" id="itineraries">Itineraries</h2>
          { errorItinerary ? (
            <p className='errorMsgCity'>Still no itineraries for this city 😕</p>
          ) : (
          <div className="containsIt">
            <div className="conetenedorItinerary">
              <div className="contTitleIti">
                <h3 className='titleItinerary'>TITLE</h3>
                <div className="likes">
                  <FontAwesomeIcon icon={faHeart} />
                  <h5>0</h5>
                </div>
              </div>
              <div className="contDatosIti">
                <div className="parte1">
                  <div className="precio">
                    <span>PRICE: </span>
                    <span className="iconPrecio">
                      <FontAwesomeIcon icon={faMoneyBill1} style={{ fontSize: '1.6rem' }} />
                      <FontAwesomeIcon icon={faMoneyBill1} style={{ fontSize: '1.6rem' }} />
                    </span>
                  </div>
                  <div className="duracion">
                    <span>DURATION: </span>
                    <span className='horas'>5 <span>Hours</span></span>
                  </div>
                </div>

                <div className="parte2">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child-thumbnail.png" />
                    </div>
                  </div>
                  <p className="name">Juan Perez</p>
                </div>

                <div className="parte3">
                  <div className="hashtags">
                    <span>HASHTAGS: </span>
                    <div className="containHash">
                      <span>#Hash1</span>
                      <span>#Hash2</span>
                      <span>#Hash3</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  View more
                </div>
                < div className="collapse-content">
                  <section className="activitiesSection">
                    <h3 className="subtitleView" id="activities">Activities</h3>
                     <p className="msjeView" id="activities"> Under Construction</p>
                    {/* <Loading /> */}
                    <div className="contenedorActivities">
                      <div className="card w-66 bg-base-100 shadow-xl">
                        <figure>
                          <img className='imgActivity' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84tQ0SYDrkEXSBE-vW4uH0kQpm7bzb2ID5w&usqp=CAU" alt="..." />
                        </figure>
                        <div className="card-body">
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>

                      <div className="card w-66 bg-base-100 shadow-xl">
                        <figure>
                          <img className='imgActivity' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84tQ0SYDrkEXSBE-vW4uH0kQpm7bzb2ID5w&usqp=CAU" alt="..." />
                        </figure>
                        <div className="card-body">
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>
                      <div className="card w-66 bg-base-100 shadow-xl">
                        <figure>
                          <img className='imgActivity' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84tQ0SYDrkEXSBE-vW4uH0kQpm7bzb2ID5w&usqp=CAU" alt="..." />
                        </figure>
                        <div className="card-body">
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>
                    </div>

                  </section>
                  <section className="comments">
                    <h3 className="subtitleView" id="activities">Comments</h3>

                    <div className="allComments">
                      <div className="muralComments">
                        <div className="onlyComments">
                          <div className="oneComment">
                            <div className="datosPersona">
                              <div className="avatar">
                                <div className="w-12 rounded-full">
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8ziIN18mTbi5Y3MzTHNk95s05ISkxaIvmQ&usqp=CAU" />
                                </div>
                              </div>
                              <p className="name">Maria Lujan</p>
                            </div>
                            <div className="texto">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, provident.</p>
                            </div>
                          </div>
                          <div className="oneComment">
                            <div className="datosPersona">
                              <div className="avatar">
                                <div className="w-12 rounded-full">
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8ziIN18mTbi5Y3MzTHNk95s05ISkxaIvmQ&usqp=CAU" />
                                </div>
                              </div>
                              <p className="name">Maria Lujan</p>
                            </div>
                            <div className="texto">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, provident.</p>
                            </div>
                          </div>
                        </div>
                        <div className="containInput">
                          <input type="text" placeholder="Comment your experience" className="input input-bordered input-md w-full " />
                          <FontAwesomeIcon className='iconEnviar' icon={faPaperPlane} />
                        </div>
                      </div>

                    </div>
                  </section>
                </div>
              </div>

            </div>
          </div>
          )}
        </section>


        <Link to={'/cities'}>
          <Button text="Back to Cities" />
        </Link>
      </div>
    </div>
  );
};

export default CityDetail;
