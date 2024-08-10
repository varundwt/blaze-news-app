import './App.css'
import { Home } from './components/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { Weather } from './components/Weather'
import { BlazeWeather } from './components/BlazeWeather'

function App() {  
  return (    
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route index element = {<Home/>}/>
        <Route path='contact' element ={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='weather' element={<Weather/>}/>
        <Route path='weather/blazeweather' element={<BlazeWeather/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>    
  )
}

export default App
