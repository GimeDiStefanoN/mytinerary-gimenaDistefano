import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h1>404 Not Found</h1>
        <Link to='/'><h2>Come Back</h2></Link>
    </div>
  )
}

export default NotFound