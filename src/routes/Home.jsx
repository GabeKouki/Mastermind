import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);


  return (
    <div className="Home">
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Home
