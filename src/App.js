import Home from './screens/HomeScreen.js';
import AllRecipes from './screens/AllRecipesScreen.js';
import Contribute from './screens/ContributeScreen.js';
import Premium from './screens/PremiumScreen.js';

import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="header">
       <h1>fooderation</h1>
       <ul id='navbar'>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/allRecipes'>All Recipes</Link></li>
       <li><Link to='/premium'>Premium</Link></li>
       <li><Link to='/contribute'>Contribute</Link></li>
       </ul>
      </header>
    </div>

    <Switch>
          
          <Route path="/allRecipes">
            <AllRecipes />
          </Route>
          <Route path="/premium">
            <Premium/>
          </Route>
          <Route path="/contribute">
            <Contribute/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
    </Switch>
    </Router>
  );
}









export default App;
