import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div>Header</div>
      <Outlet />
    </div>
  );
};

export default App;
