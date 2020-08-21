import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    
    this.state = {
      displayName: '',
      email: '', 
      password: '',
      confirmPassword: ''
    };
  };
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '', 
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  render () {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up-container">
        <div className="heading">
          <h2 className="sign-up-title">Create a new account</h2>
          <span>Sign up with your email and password</span>
        </div>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            name='displayName'
            type='text'
            value={displayName}
            label='Username'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='email'
            type='email'
            value={email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='password'
            type='password'
            value={password}
            label='Password'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            label='Confirm Password'
            handleChange={this.handleChange}
            required
          />
          <div className="sign-up-button">
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
};

export default SignUp;
//export to contact.component.jsx