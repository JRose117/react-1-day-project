import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Allcats from './components/Allcats'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allcats />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
