
import './App.css'
import Home from './Pages/home'
import ExpertSection from "./Pages/Experts"
import IntermidiateSec from './Pages/intermidiatepage'; // Update this path if needed
import HowItWorks from './Pages/HowItWoks';
import FAQSection from './Pages/FAQ';
import Footer from './Components/Footers';



function App() {

  return (
    <>
      <Home />
      <HowItWorks />
      <ExpertSection />
      <IntermidiateSec />
      <FAQSection />
      <Footer />


    
      {/* Add more pages as needed */}
    </>
  )
}

export default App
