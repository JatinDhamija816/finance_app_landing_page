import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Advantages from './components/Advantages'
import Testimonal from './components/Testimonal'
import FAQ from './components/FAQ'
import Banner from './components/Banner'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-14 md:mx-3'>
      <Navbar />
      <Home />
      <Features />
      <Advantages />
      <Testimonal />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
