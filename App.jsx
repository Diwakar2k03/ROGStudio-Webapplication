import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Teammembers from './ROG_components/Teammembers'
import Homepage from './ROG_components/Homepage'
import Photo from './ROG_components/Photo'
import Contact from './ROG_components/Contact'
import User from './ROG_components/User'
import Booking from './ROG_components/Booking'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/teammembers' element={<Teammembers/>} />
          <Route path='/Photo' element={<Photo/>}/>
          <Route path='/Contact'element={<Contact/>}/>
          <Route path='/Booking'element={<Booking/>}/>
          
        </Routes>
      </BrowserRouter>
      <User/>
    </>
  )
}

export default App
