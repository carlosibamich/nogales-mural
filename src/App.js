import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';


import Homepage from './pages/homepage/homepage.component';
import Mural from './pages/mural/mural.component'
import CheckoutPage from './pages/checkout/checkout.component';
import Collection from './pages/collection/collection.component';
import Coleccion from './pages/coleccion/coleccion.componente';
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
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/collection' component={Collection} />
          <Route path='/coleccion' component={Coleccion} />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
