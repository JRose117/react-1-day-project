/* eslint-disable camelcase */


import { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, Row, Col, Card } from 'react-bootstrap'

const Crypto = () => {
  const [errors, setErrors] = useState(false)
  const [crypto, setCrypto] = useState([])
  const [filteredCrypto, setFilteredCrypto] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getCryptoData = async () => {
      try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        setCrypto(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getCryptoData()
  }, [])

  console.log(crypto)

  useEffect(() => {
    setFilteredCrypto(
      crypto.filter(oneCrypto => oneCrypto.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    )
  }, [searchTerm, crypto])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <Container as="main" className='crypto-index text-center'>
      <h1 className='text-center mb-4'> Crypto </h1>
      <div className='search'><input type="text" value={searchTerm} placeholder="Search Coins" onChange={handleSearch} /></div>
      <Row>
        {filteredCrypto.length > 0
          ?
          filteredCrypto.map(oneCrypto => {
            const { symbol, name, image, high_24h, low_24h } = oneCrypto
            return (
              <Col key={symbol} md="6" lg="4" className='mb-4'>
                <Card>
                  <Card.Img variant='top' src={image}></Card.Img>
                  <Card.Body className='bg-light'>
                    <Card.Title className='text-center mb-0'> {name} </Card.Title>
                    <Card.Title className='text-center mb-0'> high - {high_24h}, low - {low_24h} </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
          :
          <>
            {errors ? <h2> Error </h2> : filteredCrypto.length === 0 ? <h2> No Coins Matching Search Criteria Found </h2> : <h2> Loading </h2>}
          </>}
      </Row>
    </Container>

  )
}

export default Crypto