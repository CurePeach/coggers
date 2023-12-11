import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'ui/header/header';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
