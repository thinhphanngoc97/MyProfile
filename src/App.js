import React from 'react';
import './App.css';
import Header from './components/Header';
import ContentBody from './components/ContentBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ContentBody/>
      <Footer/>
    </div>
  );
}

export default App;
