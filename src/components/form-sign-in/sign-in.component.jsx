import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    
    this.state = {
      email: '', 
      password: ''};
  };
  
  
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.log(error);
    }
  };

  render () {
    const { email, password } = this.state;

    return (
      <div className="sign-in-container">
        <div className="heading">
          <h2 className="sign-in-title">Already have an account?</h2>
          <span>Sign in with your email and password</span>
        </div>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <div className="sign-in-buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton 
              onClick={signInWithGoogle} 
              type="button"
              isGoogleSignIn>
                Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }7
};

export default SignIn;
//export to contact.component.jsx