import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllAnime from './components/AllAnime'
// import AllBeer from './components/AllBeer'
import Beer from './components/Beer'
import Form from './components/Form'
import Form2 from './components/Form2'

const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/anime" element={<AllAnime />} />
          {/* <Route path="/beer" element={<AllBeer />} /> */}
          <Route path="/beer" element={<Beer />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form2" element={<Form2 />} />
          {/* <Route path='/anime/:animeId' element={<OneAnime />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
