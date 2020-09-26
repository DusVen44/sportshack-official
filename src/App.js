import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import MainContainer from './Components/MainContainer/MainContainer';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <MainContainer />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
