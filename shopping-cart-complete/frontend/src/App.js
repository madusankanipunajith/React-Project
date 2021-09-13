import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import NavBar from './components/NavBar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';


function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
      <Router>
        <NavBar click ={()=> setSideToggle(true)}/>
        <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
        <BackDrop show={sideToggle} click={()=> setSideToggle(false)}/>
        <main>
            <Switch>
              <Route exact path = "/">
                  <HomeScreen/>
              </Route>
              <Route exact path = "/product/:id">
                  <ProductScreen/>
              </Route>
              <Route exact path = "/cart">
                  <CartScreen/>
              </Route> 
            </Switch>
        </main>
      </Router>
  );
}

export default App;
