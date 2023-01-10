import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllAnime from './components/archive/AllAnime'
import Anime from './components/Anime'
// import AllBeer from './components/AllBeer'
import Beer from './components/Beer'
import Cocktails from './components/Cocktails'
import DrinkSingle from './components/DrinkSingle'
import Crypto from './components/Crypto'
import HarryPotter from './components/HarryPotter'
import Form from './components/Form'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import NavBar from './components/NavBar'




const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/anime" element={<AllAnime />} /> */}
          <Route path="/anime" element={<Anime />} />
          {/* <Route path="/beer" element={<AllBeer />} /> */}
          <Route path="/beer" element={<Beer />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/Crypto" element={<Crypto />} />
          <Route path="/cocktails/:id" element={<DrinkSingle />} />
          <Route path="/HarryPotter" element={<HarryPotter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          {/* <Route path='/anime/:animeId' element={<OneAnime />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
