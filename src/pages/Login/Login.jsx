import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import './Login.css'
import { user_photo } from '../../store/actions/userActions';

const Login = () => {

    const dispatch = useDispatch();

    const handleSignIn = ()=>{
      //simulo login correcto y que obtengo datos, utilizo el dispath para enviar los datos y que el reducer haga el cambio
      const user = {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgknKeRhqsX3alhE0zKMB1RblConwnE44oQ&usqp=CAU"
      }

      dispatch(user_photo(user))
    }

  return (
    <div className="containViews">
      <h1 className='titleView'>Login</h1>

      <h2 className='subtitleView'>Web Under Construction </h2>

      <Loading />

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
        > Login</button>
      </div>
    </div>
  )
}

export default Login