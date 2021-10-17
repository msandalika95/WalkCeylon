import React from 'react';
import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';


import './App.css';
import './cssFiles/About.css';
import './cssFiles/Home.css';
import './cssFiles/About.css';

import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import info from './pages/Info'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/AboutUs" component = {Aboutus}/>
      <Route path = "/ContactUs" component = {Contactus}/>
      <Route path = "/Info" component = {info}/>
    </React.Fragment>
  );
}

export default App;
