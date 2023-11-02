import { useState } from 'react';
import { AREA_URL, CATEGORY_URL } from './globals';
import axios from 'axios';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className='app'>
      <div className='main-container'>
        <Main />
      </div>
    </div>
  );
}

export default App;
