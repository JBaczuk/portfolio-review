import React from 'react'
import './index.css';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
export default function App() {
  return(
   <>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About />}/>
     <Route path='/contact' element={<Contact />}/>
     <Route path='/portfolio' element={<Portfolio />}/>
   </Routes>
   </>
  )     
}
