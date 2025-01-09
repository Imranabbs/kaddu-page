import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Maqruee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Footer from './components/Footer'
import Featured from './components/Featured'
import LocomotiveScroll from 'locomotive-scroll';




function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full- min-h-screen  text-white bg-zinc-900'>
     <Navbar />
     <LandingPage/>
    <Maqruee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Footer/>
    </div>
  )
}

export default App
