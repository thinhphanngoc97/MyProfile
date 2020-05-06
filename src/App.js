import React from 'react';
import './App.css';
import Header from './components/Header';
import ContentBody from './components/ContentBody';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <ContentBody/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
