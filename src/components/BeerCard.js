import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function BeerCard(props) {

  return (
    <Container as='main'>
      <Row>
        <Col md='6' lg='4' className='mb-4'>
          <Card>
            <Card.Body className='bg-light'>
              <Card.Title className='text-center mb-0'>{props.name} </Card.Title>
              <Card.Img variant='top' src={props.image}></Card.Img>
              <p> {props.description} </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}