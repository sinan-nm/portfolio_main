import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WhatIuse from './components/WhatIuse'
import Contact from './components/Contact' // Fix: Point to your component, not lucide-react

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <WhatIuse/>
      <Contact/>
    </>
  )
}

export default App