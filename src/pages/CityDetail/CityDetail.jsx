import { useParams } from "react-router-dom"

const CityDetail = () => {
    const {id} = useParams();
    
  return (
    <div>
        <h1>City Detail</h1>
        <h3>City # {id}</h3>
    </div>
  )
}

export default CityDetail