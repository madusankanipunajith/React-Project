import './App.css';
import {Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <h1>Hello World...</h1>
      <Router>
          <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/feed">Feed</Link></li>
              </ul>
          </nav>
          <Switch>
              <Route exact path="/home">
                  <Home/>
              </Route>
              <Route exact path="/feed">
                  <Feed/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
