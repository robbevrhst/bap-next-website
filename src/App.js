import React from 'react';
import './App.css';
import './css/global/global.css';
import Nav from './components/navigation/Navigation';
import Login from './components/Login';
import Customcontent from './components/Customcontent';
import Stappencomponent from './components/Stappencomponent';
import Sightseeingcomponent from './components/Sightseeingcomponent';
import Footer from './components/Footercomponent';
import Planning from './components/Planning';
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
          <Stappencomponent />
          <Sightseeingcomponent />
          <Planning />
          <Footer />
        </Route>
      </Router>
    </>
  );
}

export default App;
