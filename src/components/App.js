import React from 'react';
import Router from '../containers/Router';
import NavContainer from '../containers/NavContainer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router />
      <NavContainer />
    </div>
  );
}

export default App;
