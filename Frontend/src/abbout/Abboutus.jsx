import React from 'react'
import Navbar from '../components/Navbar'
import Abbout from '../components/Abbout'
import Footer from '../components/Footer'

function Abboutus() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Abbout/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Abboutus
