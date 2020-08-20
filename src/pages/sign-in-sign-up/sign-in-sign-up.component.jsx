import React from 'react';

import BurgerMenu from '../../components/burger-menu/burger-menu.component';

import HomeIcon from '../../components/home-icon/home-icon.component';
import SignIn from '../../components/form-sign-in/sign-in.component';
import SignUp from '../../components/form-sign-up/sign-up.component';
import Footer from '../../components/footer/footer.component';

import './sign-in-sign-up.styles.scss';

const SignInSignUp = ({ history }) => {
  return (
    <div className="contact-container">
      <div className="home-button" onClick={() => history.push('./')}>
        <HomeIcon />
      </div>
      {/* <BurgerMenu /> */}
      <div className="forms">
        <SignIn />
        <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default SignInSignUp;
//export to App.js