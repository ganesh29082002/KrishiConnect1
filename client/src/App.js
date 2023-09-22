import React from 'react'
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
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
    <NavigationBar />
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/govschemes/home" element={<WeatherIndex />} />
          
          
        </Routes>
        <Footer/>
       </BrowserRouter>
       
    <div>
     {/* <WeatherIndex/> */}
    
    </div>
    
    </>
  )
}
