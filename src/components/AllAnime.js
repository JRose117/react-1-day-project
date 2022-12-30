import { useState, useEffect } from 'react'
import axios from 'axios'
import AnimeCard from './AnimeCard'

const AllAnime = () => {

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
  console.log(anime)

  const animeComp = anime.map(oneAnime => {
    return <AnimeCard
      key={oneAnime.mal_id}
      english_title={oneAnime.title_english}
      japanese_title={oneAnime.title_japanese}
      image={oneAnime.images.jpg.image_url}
    />
  })

  return (
    <>
      <div> {animeComp} </div>
    </>
  )
}

export default AllAnime