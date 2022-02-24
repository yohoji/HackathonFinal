import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeOne from './components/HomeOne';
import AOS from 'aos';
import Header from './components/Header';
import Client from './components/Client';
import Footer from './components/Footer';
import FooterData from './components/FooterWidgets/FooterData';

import './App.css';

function App() {
  AOS.init();
  
  return (
    <div className="main-wrapper">
        <Router>
            <Header/>
              <Route exact path="/" render={props => (
                  // <React.Fragment>
                      <HomeOne/>
                  // </React.Fragment>
              )} />
            <Client/>
            <Footer FooterData={FooterData}/>
        </Router>
    </div>
  );
  
}

export default App;
