// src/App.js
import React from 'react';
import './css/style.css'; // Import global CSS
import Header from './components/Header'; // Import Header
import Carousel from './components/Carousel'; // Import Carousel
import SearchSection from './components/SearchSection'; // Import SearchSection
import Footer from './components/Footer'; // Import Footer
import UploadImage from './components/UploadImage'; 

function App() {
  return (
    <div className="App">

      

      <div className='blue-section'>
        <Header />
        <Carousel />
      </div>
      
      <div className='white-section'>
        <SearchSection />
        <UploadImage />
      </div>
      
      <Footer />

    </div>
  );
}

export default App;
