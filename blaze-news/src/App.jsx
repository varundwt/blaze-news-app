import './App.css'
import { Home } from './components/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
function App() {
  
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route index element = {<Home/>}/>
        <Route path='contact' element ={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
