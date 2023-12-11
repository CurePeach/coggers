import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'ui/header/header';
import { Page } from 'utils/route_loaders';

import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState<Page>();

  return (
    <div className="App">
      <Header currentPage={currentPage} />
      <Outlet context={{ currentPage, setCurrentPage }} />
    </div>
  );
};

export default App;
