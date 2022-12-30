import React from 'react'

export default function AnimeCard(props) {

  return (
    <>
      <h3>{props.english_title}</h3>
      <h3>{props.japanese_title}</h3>
      <img src={props.image} alt={props.english_title} />
    </>
  )
}