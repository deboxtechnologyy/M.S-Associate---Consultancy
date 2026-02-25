import React from 'react'
import './App.css'
import Header from './common-component/Header'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './common-component/Navbar'
import Footer from './common-component/Footer'
import Home from './pages/home/Home'

function App() {
  
  return (
<>
  <Header/>
  <Navbar/>
<Router>

  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
   <Routes>
    <Route path='/about' element={<Navbar/>}/>
  </Routes>
  
</Router>

<Footer/>

</>
  )
}

export default App
