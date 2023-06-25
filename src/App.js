import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import LanguagesKnown from './components/LanguagesKnown';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Navbar/>
      <Home />
      <About/>
      <LanguagesKnown />
      <Contact />
      <SocialLinks/>
    </div>
  );
}

export default App;
