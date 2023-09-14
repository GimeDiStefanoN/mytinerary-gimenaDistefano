import Loading from '../../components/Loading/Loading';
import './SignUp.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SignUp = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const countryNames = response.data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);


  return (
    <div className="containViews containForm">
      <h1 className="titleSection">Sign Up</h1>

      {/* <h2 className='subtitleView'>Web Under Construction </h2>

      <Loading /> */}

      <div className="formLogin">

        <div className="form-control">
          <label className="input-group input-group-md">
            <span>Name</span>
            <input type="text" placeholder="Type your name" className="input input-bordered input-md" />
          </label>
        </div>

        <div className="form-control">
          <label className="input-group input-group-md">
            <span>Lastname</span>
            <input type="text" placeholder="Type your lastname" className="input input-bordered input-md" />
          </label>
        </div>

        <div className="form-control">
          <label className="input-group input-group-md">
            <span>Email</span>
            <input type="text" placeholder="example@domain.com" className="input input-bordered input-md" />
          </label>
        </div>

        <div className="form-control">
          <label className="input-group input-group-md">
            <span>Password</span>
            <input type="password" placeholder="*****" className="input input-bordered input-md" />
          </label>
        </div>

        <div className="form-control">
          <label className="input-group input-group-md">
            <span>Photo</span>
            <input type="text" placeholder="Insert your photo" className="input input-bordered input-md" />
          </label>
        </div>

        <div className="form-control">
          <div className="input-group">
            <span>Place</span>
            <select className="select select-bordered">
              <option disabled selected>Select your place</option>
              {countries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
            </select>
            {/* <button className="btn">Go</button> */}
          </div>
        </div>

        <button
          className="btn no-animation"
        // onClick={}
        >
          Sign Up
        </button>

      </div>

      <p className='textForm'>Do you already have an account?  <Link to={"/Login"}><b>Login</b></Link></p>

    </div>
  )
}

export default SignUp