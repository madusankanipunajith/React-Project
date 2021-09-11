import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <main>
            <Switch>
              <Route exact path = "/">

              </Route>
              <Route exact path = "/product/:id">

              </Route>
              <Route exact path = "/cart">

              </Route>
            </Switch>
        </main>
      </Router>
  );
}

export default App;
