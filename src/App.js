import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllAnime from './components/AllAnime'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllAnime />} />
          {/* <Route path='/anime/:animeId' element={<OneAnime />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
