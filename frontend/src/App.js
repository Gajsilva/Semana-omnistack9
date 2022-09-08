import React from 'react';

import './App.css';
import logo from './assets/logo.svg';

import Routess from './routes';

function App() {
  return (
    <div className= "container">
        <img src={logo} alt="" />

        <div className='content'>
          <Routess />
        
        </div>

    </div>
  );
};

export default App;
