import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import IndexRoute from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <IndexRoute />
      </div>
    </BrowserRouter>

  );
}

export default App;
