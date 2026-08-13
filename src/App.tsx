import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {

  

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/profile' />
          </Route>
          <Route path='/profile'>
            <HomePage />
          </Route>
          <Route path='/summary'>
            <p>Thank you for contacting us, we will come back to you very soon</p>
          </Route> 
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
