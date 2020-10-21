import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import MainContainer from './Components/MainContainer/MainContainer';
import Footer from './Components/Footer/Footer';
import Media from 'react-media';
import Burger from './Components/Burger/Burger';

function App() {
  return (
    <div className="App">
      <Media
        query="(max-width: 1299px)"
        render={() =>
        (
          <Burger />
        )}
      />
      <Header />
      <Media 
        query="(min-width: 1300px)"
        render={() =>
        (
          <Menu />
        )}
      />
      <MainContainer />
      <Media 
        query="(min-width: 1300px)"
        render={() =>
        (
          <Menu />
        )}
      />
      <Footer />
    </div>
  );
}

export default App;
