import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Move darkMode state here

  // Apply dark theme to body
  if (darkMode) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} />} />
        <Route path='/home' element={<Home darkMode={darkMode} />} />
        <Route path='/projects' element={<Projects darkMode={darkMode} />} />
        <Route path='/contact' element={<Contact darkMode={darkMode} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
