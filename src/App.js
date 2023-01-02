import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllAnime from './components/AllAnime'
import AllBeer from './components/AllBeer'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/anime" element={<AllAnime />} />
          <Route path="/beer" element={<AllBeer />} />
          {/* <Route path='/anime/:animeId' element={<OneAnime />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
