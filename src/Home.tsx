import { Link } from 'react-router'

export default function Home() {
  return (
    <div className='home'>
        <Link to={"countries-holiday"}>
            Go To Countries Holiday
        </Link>        
        <Link to={"restaurant-booking"}>
            Go To Restaurant Booking
        </Link>        
        <Link to={"movies"}>
            Go To Movies
        </Link>        
    </div>
  )
}
