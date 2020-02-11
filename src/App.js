import React from 'react';
import './App.css';
import './css/global/global.css';
import Nav from './components/navigation/Navigation';
import Login from './components/Login';
import Customcontent from './components/Customcontent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav></Nav>
      <Router>
        <Route path={'/'} exact>
          <Login />
        </Route>

        <Route path={'/:id'} exact>
          <Customcontent />
        </Route>
      </Router>
    </>
  );
}

export default App;
