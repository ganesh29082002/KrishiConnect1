import React from 'react'
import { BrowserRouter, Routes, Route }from 'react-router-dom'
// import GovHome from "./featurePages/govSchems/GovHome";
import Gov_Articles from "./featurePages/articles/Gov_Articles";
import CropCultivation_Article from "./featurePages/articles/Categories/CropCultivation_Article";

export default function App() {
  return (
    <BrowserRouter>
     {/* <GovHome/> */}
    <Routes>
      <Route path="/" element={<Gov_Articles/>}/>
      <Route path='Category_1' element={<CropCultivation_Article />}/>
    </Routes>
    </BrowserRouter>
  )
}
