import React from 'react'

import AboutUs from '../components/AboutUs';

import Caraousal from '../components/common/Caraousal'
import Contact from "../components/Contact";
import Service from "../components/Platform";
export default function HomePage() {
  return (
    <>
       <Caraousal/>
       <Service/>
       <AboutUs/>
       <Contact/>
      
    </>
  )
}
