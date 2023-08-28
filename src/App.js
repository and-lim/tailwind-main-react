import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Partner from './components/Partner';
import Trusted from './components/Trusted';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

function App() {
  return (
    <div>

      <Header/>
       <Hero/>
      <Partner/>
      <About/>
      <Trusted/>
      <Pricing/>
      <FAQ/>
      <Footer/>

    </div>
  );
}
export default App;
