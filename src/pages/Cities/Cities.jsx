import { Link } from 'react-router-dom'

const Cities = () => {
  const cities = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
]
  return (
    <div>
        <h1>Cities</h1>
       { cities.map((city) => {
            return (
              <Link key={city.id} to={`/cities/${city.id}`}>
                  <div>City</div>
              </Link>
            )
          })
        }
       
    </div>
  )
}

export default Cities