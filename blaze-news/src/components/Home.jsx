import { HeroSection } from './HeroSection'
import '../App.css'
import { StockBar } from './StockBar'
import { AppStats } from './AppStats'
export const Home = () => {
  return (
    <>  
        <StockBar/>      
        <HeroSection/>  
        <AppStats/>      
    </>
  )
}
