import { useState, useEffect } from 'react'
import axios from 'axios'
import BeerCard from './BeerCard'

const AllBeer = () => {

  const [errors, setErrors] = useState(false)
  const [beer, setBeer] = useState([])
  
  useEffect(() => {
    const getBeerData = async () => {
      try {
        const { data } = await axios.get('https://api.punkapi.com/v2/beers')
        setBeer(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getBeerData()
  }, [])
  console.log(beer)

  const BeerComp = beer.map(oneBeer => {
    return <BeerCard 
      key={oneBeer.id}
      name={oneBeer.name}
      description={oneBeer.description}  
      image={oneBeer.image_url}  
    />
  })

  return (
    <>
      <div> {BeerComp} </div>
    </>
  )
}

export default AllBeer