/* eslint-disable camelcase */


import { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Beer = () => {
  const [errors, setErrors] = useState(false)
  const [beers, setBeers] = useState([])
  const [filteredBeers, setFilteredBeers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    const getBeerData = async () => {
      try {
        const { data } = await axios.get('https://api.punkapi.com/v2/beers')
        setBeers(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getBeerData()
  })

  useEffect(()=>{
    setFilteredBeers(
      beers.filter(beer => beer.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    )
  }, [searchTerm, beers])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <Container as="main" className='beer-index text-center'>
      <h1 className='text-center mb-4'> Beers </h1>
      <div className='search'><input type="text" value={searchTerm} placeholder="Search for a Beer" onChange={handleSearch} /></div>
      <Row>
        {filteredBeers.length > 0
          ?
          filteredBeers.map(beer => {
            const { id, name, description, image_url } = beer
            return (
              <Col key={id} md="6" lg="4" className='mb-4'>
                <Card>
                  <Card.Img variant='top' src={image_url}></Card.Img>
                  <Card.Body className='bg-light'>
                    <Card.Title className='text-center mb-0'> {name} </Card.Title>
                    <Card.Title className='text-center mb-0'> {description} </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
          :
          <>
            {errors ? <h2> Error </h2> : filteredBeers.length === 0 ? <h2> No beers found </h2> : <h2> Loading </h2>}
          </>}
      </Row>
    </Container>
  )
}

export default Beer