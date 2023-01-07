import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="hero text-center">
      <div className="hero-container">
        <h1 className='display-3'> API, Get Request Revision</h1>
        <Link className='btn dark' to="/anime"> Anime API </Link>
        <Link className='btn dark' to="/beer"> Brewdog API </Link>
        <Link className='btn dark' to="/form"> Pointless Form </Link>
        <Link className='btn dark' to="/form2"> A Second Pointless Form </Link>
      </div>
    </main>
  )
}
export default Home