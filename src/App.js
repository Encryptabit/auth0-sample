import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// Routes
import Account from './components/Account/Account';
import Packages from './components/Packages/Packages';
import Homepage from './components/Homepage/Homepage';

// Components
import LoginButton from './components/LoginButton/LoginButton';


function App() {
  return (
    <div className="wrapper">
      <LoginButton/>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/packages">Packages</Link></li>
          </ul>
        </nav>
      
        <Switch>
          <Route path="/home">
            <Homepage/>
          </Route>
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/packages">
            <Packages/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
