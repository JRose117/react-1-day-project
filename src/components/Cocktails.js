import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import  Spinner  from './Spinner'

const Cocktails = () => {
  const [errors, setErrors] = useState(false)
  const [drinks, setDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    const getDrinkData = async () => {
      try {
        const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        setDrinks(data.drinks)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getDrinkData()
  }, [])
  console.log(drinks)

  useEffect(()=>{
    setFilteredDrinks(
      drinks.filter(drink => drink.strDrink.toLowerCase().startsWith(searchTerm.toLowerCase()))
    )
  }, [searchTerm, drinks])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <Container as="main" className='drinks-index text-center'>
      <h1 className='text-center mb-4'>Drinks</h1>
      <div className='search'><input type="text" value={searchTerm} placeholder="Search for a Drink" onChange={handleSearch} /></div>
      <Row>
        { filteredDrinks.length > 0
          ?
          filteredDrinks.map(drink => {
            const { idDrink, strDrink, strCategory, strDrinkThumb } = drink
            console.log(drink)
            return (
              <Col key={idDrink} md="6" lg="4" className='mb-4'>
                <Link to={`/cocktails/${idDrink}`}>
                  <Card>
                    <Card.Img variant='top' src={strDrinkThumb}></Card.Img>
                    <Card.Body className='bg-light'>
                      <Card.Title className='text-center mb-0'>{strDrink} - {strCategory}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })
          :
          <>
            { errors ? <h2>Something went wrong. Please try again later</h2> : <Spinner/>}
          </>
        }
      </Row>
    </Container>
  )
}

export default Cocktails