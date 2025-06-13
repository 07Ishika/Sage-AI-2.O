import './App.css'
import Home from './Pages/home'
import ExpertSection from "./Pages/Experts"
import IntermidiateSec from './Pages/intermidiatepage'; // Update this path if needed
import HowItWorks from './Pages/HowItWoks';
import FAQSection from './Pages/FAQ';
import Footer from './Components/Footers';
import ConsultantRegistrationForm from './Pages/Consultationfom';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <>
            <Home />
            <HowItWorks />
            <ExpertSection />
            <IntermidiateSec />
            <FAQSection />
            <Footer />
          </>
        )} />
        <Route path="/register-consultant" element={<ConsultantRegistrationForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
