import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Allcats from './components/Allcats'
import AllAnime from './components/AllAnime'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Allcats />} /> */}
          <Route path="/" element={<AllAnime />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
