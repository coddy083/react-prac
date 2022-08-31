import React from 'react';
import Login from './login';
import Orders from './order';
import NavMenu from './nav';
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
      <div>
      <NavMenu />
      <Orders />
      </div>
    )
  }
}


export default App;
