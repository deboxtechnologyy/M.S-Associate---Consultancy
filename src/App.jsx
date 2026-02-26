import React from 'react'
import './App.css'
import Header from './common-component/Header'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './common-component/Navbar'
import Footer from './common-component/Footer'

import Home from './pages/home/Home'

import Blog from './pages/blog/Blog'
import BlogDetail from './pages/blog/BlogDetails'
import DivorceServicePage from './pages/service/Services'
import BailService from './pages/service/bail/page'
import ChequeBounce from './pages/service/cheque-bounce/page'
import CivilSuits from './pages/service/civil-suits/page'
import CriminalCases from './pages/service/criminal-cases/page'
import DivorcePage from './pages/service/divorce-and-family-court-cases/page'
import LegalNotice from './pages/service/legal-notice/page'
import AboutPage from './pages/about/About'
import ContactPage from './pages/contact/Contact'
import WhatsAppIcon from './common-component/Icon'



function App() {
  
  return (
<>
 
<Router>
 <Header/>


  <Routes>

 

  

    <Route path='/' element={
      <div>
           <Navbar/>
           <Home/>
      </div>
 }/>
    <Route path="/blog" element={
      <div>
        <Navbar/>
          <Blog/>
      </div>
    
    }/>
    <Route path="/blog/:id" element={
<div>
  <Navbar/>
      <BlogDetail/>
      </div>
    }/>



    <Route path="/service/bail" element={
      <div>
        <Navbar/>
        <BailService/>
      </div>
    }/>

    <Route path="/service/cheque-bounce" element={
      <div>
        <Navbar/>
        <ChequeBounce/>
      </div>
    }/>

    <Route path="/service/civil-suits" element={
      <div>
        <Navbar/>
        <CivilSuits/>
      </div>
    }/>

    <Route path="/service/criminal-cases" element={
      <div>
        <Navbar/>
        <CriminalCases/>
      </div>
    }/>

  <Route path="/service/divorce-and-family-court-cases" element={
    <div>
      <Navbar/>
      <DivorcePage/>
    </div>
  }/>

  <Route path="/service/legal-notice" element={
    <div>
      <Navbar/>
      <LegalNotice/>
    </div>
  }/>

  <Route path="/about" element={
    <div>
      <Navbar/>
      <AboutPage/>
    </div>
  }/>

  <Route path="/contact" element={
    <div>
      <Navbar/>
      <ContactPage/>
    </div>
  }/>
  </Routes>
<WhatsAppIcon/>
  <Footer/>

</Router>


</>
  )
}

export default App
