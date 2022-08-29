import './App.css';
import React, { useState } from 'react';
import Login from './login';
import Orders from './order';

const token = localStorage.getItem('token_access');

function App() {

  if (token === null) {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    );
  } else {
    return (
      <Orders />
    )
  }
}


export default App;
