import React from 'react';
import User from './pages/User';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import { Navbar } from 'reactstrap';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';

const history = createBrowserHistory();
const App: React.FC = () => {
  return (
    <div>
      <Router history={history}>
        <nav>
          <div className="navContent">
            <div className="navLinks">
              <Link to="/post">Users</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/post" component={User}></Route>
        </Switch>
      </Router>
      {/* <User /> */}
    </div>
  );
}

export default App;
