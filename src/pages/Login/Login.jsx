import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import './Login.css'
import { user_photo } from '../../store/actions/userActions';
import { Link } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();

  const handleSignIn = () => {
    //simulo login correcto y que obtengo datos, utilizo el dispath para enviar los datos y que el reducer haga el cambio
    const user = {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgknKeRhqsX3alhE0zKMB1RblConwnE44oQ&usqp=CAU"
    }

    dispatch(user_photo(user))
  }

  return (
    <div className="containViews containFormLogin ">
      <h1 className="titleSection">Login</h1>

      {/*<h2 className='subtitleView'>Web Under Construction </h2>

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
            <span>Password</span>
            <input type="password" placeholder="*****" className="input input-bordered input-md" />
          </label>
        </div>
        <button
          className="btn no-animation"
          onClick={handleSignIn}
        >
          Login
        </button>

      </div>
      <div className="demo">
        <div className="or or--x"> o </div>
      </div>
      <div>
        <p> ACA VA IR EL LOGIN DE GOOGLE</p>
      </div>
      <p className='textForm'>You do not have an account? <Link to={"/SignUp"}><b>Sign up</b></Link></p>

    </div>
  )
}

export default Login