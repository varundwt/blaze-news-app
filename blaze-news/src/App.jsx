import './App.css'
import { AppStats } from './components/AppStats'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'

function App() {
  
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AppStats/>
      <Footer/>
    </>
  )
}

export default App
