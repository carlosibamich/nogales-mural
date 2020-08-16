import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Mural from './pages/mural/mural.component'
import Portfolio from './pages/portfolio/portfolio.component';
import Portafolio from './pages/portafolio/portafoilo.component';
import Contact from './pages/contact/contact.component';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/mural' component={Mural} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/portafolio' component={Portafolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
