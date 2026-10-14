import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Summary } from './layouts/Summary/Summary';
import { WelcomePage } from './layouts/Welcome/WelcomePage';

export const App = () => {

  

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <WelcomePage />
          </Route>

          {/* 👇 Route raccourcie pour ton CV */}
          <Route path='/franklin-feudjo' exact>
            <Redirect
              to='/profile?unique_uid=e5dc1532-1501-4c88-a23a-f78e5e82d2fc'
            />
          </Route>

          {/* 👇 /profile : gère les 2 cas en interne (HomePage décide) */}
          <Route path='/profile'>
            <HomePage />
          </Route>
          
          <Route path='/summary'>
            <Summary />
          </Route> 
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
