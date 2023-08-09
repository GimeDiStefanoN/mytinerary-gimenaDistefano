import './NotFound.css'
import { Link } from "react-router-dom"
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';

const NotFound = () => {
  return (
    <div className="containViews">
      <div className="containError">

        <h1 className='titleView'>Not Found</h1>

        <h2 className='subtitleView'>Web Under Construction </h2>

        <Loading />

        <Link to='/' >
          <Button text='Go to Home' className="buttonError" />
        </Link>
      </div>
    </div>
  )
}

export default NotFound