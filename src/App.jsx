import React from 'react'
import './App.css'
import Header from './common-component/Header'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './common-component/Navbar'
import Footer from './common-component/Footer'

function App() {
  
  return (
<>
<Router>
  <Header/>
  
  <Routes>
    <Route path='/' element={<Navbar/>}/>
  </Routes>
  <Footer/>
</Router>

</>
  )
}

export default App
