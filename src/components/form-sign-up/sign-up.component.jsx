import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    
    this.state = {
      userName: '',
      email: '', 
      password: '',
      confirmPassword: ''
    };
  };
  
  
  handleChange = (e) => {
    this.setState({name: e.target.value});
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for signing up ' + this.state.name + '!');
    //this.setState({name: ''});
  };

  render () {
    return (
      <div className="sign-up-container">
        <div className="heading">
          <h2 className="sign-up-title">Create a new account</h2>
          <span>Sign up with your email and password</span>
        </div>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            name='userName'
            type='text'
            value={this.state.userName}
            label='Username'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='email'
            type='email'
            value={this.state.email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='password'
            type='password'
            value={this.state.password}
            label='Password'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            name='confirmPassword'
            type='password'
            value={this.state.confirmPassword}
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