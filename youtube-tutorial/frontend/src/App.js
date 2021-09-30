import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Fragment } from 'react';
import BootcampsPage from './pages/BootcampsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
        <Navbar/>
        
        <Router>
          <Switch>
            <Route exact path="/" component={BootcampsPage}/>
          </Switch>
        </Router>

    </Fragment>
  );
}

export default App;
