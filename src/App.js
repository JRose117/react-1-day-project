import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      console.log('working')
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App
