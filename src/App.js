import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import BurgerMenu from './components/burger-menu/burger-menu.component';
import Homepage from './pages/homepage/homepage.component';
import Mural from './pages/mural/mural.component'
import Portfolio from './pages/portfolio/portfolio.component';
import Portafolio from './pages/portafolio/portafoilo.component';
import CollectionItem from './pages/collection/collection-item.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          }, () => console.log(this.state));
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/mural' component={Mural} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/portafolio' component={Portafolio} />
          <Route path='/collection-item' component={CollectionItem} />
          <Route 
            exact 
            path='/signin'
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/mural' />
              ) : (
                <SignInSignUp />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
