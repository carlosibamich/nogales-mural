import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import BurgerMenu from './components/burger-menu/burger-menu.component';
import Homepage from './pages/homepage/homepage.component';
import Mural from './pages/mural/mural.component'
import Portfolio from './pages/portfolio/portfolio.component';
import Portafolio from './pages/portafolio/portafoilo.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state));
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <BurgerMenu currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/mural' component={Mural} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/portafolio' component={Portafolio} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
};

export default App;
