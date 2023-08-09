import './CityDetail.css';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';

const CityDetail = () => {
  const { id } = useParams();

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