import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Card_Section from './Card_Section';
import { useState } from 'react';

function App() {
  const [cartDigit, setCartDigit] = useState(0);

  const cartAdded = function(){
    setCartDigit(cartDigit + 1);
  }

  const cartDeleted = function(){
    setCartDigit(cartDigit - 1);
  }
  return (
    <>
      <Navbar cartDigit = {cartDigit}/>
      <Header />
      <Card_Section cartAdded = {cartAdded} cartDeleted = {cartDeleted}/>
      <Footer />
    </>
  )
}

export default App;
