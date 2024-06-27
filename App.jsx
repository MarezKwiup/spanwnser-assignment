import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SocialLinks from './components/SocialLinks';
import ScrollLinks from './components/ScrollLinks';

function App() {
  return (
    <div className="app">
      <div className="content">
        <Header/>
        <div className="fading-dotted-border"></div>
        <main className="main-content">
          <MainContent />
          <SocialLinks />
          <ScrollLinks />
        </main>
      </div>
    </div>
  );
}

export default App;
