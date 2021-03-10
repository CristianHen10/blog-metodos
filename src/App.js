import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Paradigmas from './pages/Paradigmas';
import Referencias from './pages/Referencias';
import Lenguajes from './pages/Lenguajes';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/paradigmas' exact>
            <Paradigmas />
          </Route>
          <Route path="/lenguajes" exact>  
            <Lenguajes />
          </Route>
          <Route path="/referencias" exact>  
            <Referencias />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
