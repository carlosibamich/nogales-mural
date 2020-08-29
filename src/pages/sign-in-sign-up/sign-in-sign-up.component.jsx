import React from 'react';
import { withRouter } from 'react-router-dom';

import HeaderNav from '../../components/header-nav/header-nav.component';
import SignIn from '../../components/form-sign-in/sign-in.component';
import SignUp from '../../components/form-sign-up/sign-up.component';
import Footer from '../../components/footer/footer.component';

import './sign-in-sign-up.styles.scss';

const SignInSignUp = () => {
  return (
    <div className="contact-container">
      <HeaderNav />
      <div className="forms">
        <SignIn />
        <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(SignInSignUp);
//export to App.js