import React from 'react'

// import Gov_Articles from "../featurePages/articles/Gov_Articles";
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import GovHome from './featurePages/govSchems/GovHome'
import HomePage from './pages/HomePage';
import WeatherIndex from "./featurePages/weatherAPI/WeatherIndex";
import Footer from "./components/Footer";

import './css/variable.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
   
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
    <BrowserRouter>
    
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/govschemes/home" element={ <GovHome/>} />
      <Route path="/weather/home" element={<WeatherIndex />} />

          
          
        </Routes>
        <Footer/>
       </BrowserRouter>
       
    <div>
     {/* <WeatherIndex/> */}
    
    </div>
    
    </>
  )
}
