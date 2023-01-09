import { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Anime = () => {
  const [errors, setErrors] = useState(false)
  const [anime, setAnime] = useState([])

  useEffect(() => {
    const getAnimeData = async () => {
      try {
        const { data } = await axios.get('https://api.jikan.moe/v4/anime')
        setAnime(data.data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getAnimeData()
  }, [])

  return (
    <Container as='main' className='anime-index text-center'>
      <h1 className='text-center mb-4'> Anime </h1>
      <Row>
        {anime.length > 0
          ?
          anime.map(anime => { // eslint-disable-next-line
            const { mal_id, title_english, images } = anime
            console.log(anime)
            return ( // eslint-disable-next-line
              <Col key={mal_id} md='6' lg='4' className='mb-4'>
                <Card>
                  <Card.Img variant='top' src={images.jpg.image_url}></Card.Img>
                  <Card.Body className='bg-light'>
                    {/* eslint-disable-next-line */}
                    <Card.Title className='text-center mb-0'> {title_english} </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
          :
          <>
            {errors ? <h2> Error </h2> : <h2> Loading... </h2>}
          </>}

      </Row>
    </Container>
  )
}
export default Anime