import React from 'react';

import './contact.styles.scss';

class Contact extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      text: 'Enter a message here',
      favFruit: 'coconut' 
    };
  };
  
  
  handleChange = (e) => {
    this.setState({name: e.target.value});
  };

  handleFruitChange = (e) => {
    this.setState({favFruit: e.target.value});
  };
  
  handleSubmit = (e) => {
    alert('A name was submitted: ' + this.state.name);
    alert('A new favorite fruit was submitted: ' + this.state.favFruit);
    this.setState({value: ''});
    console.log('A name was submitted: ' + this.state.name);
    console.log('A new favorite fruit was submitted: ' + this.state.favFruit);
    e.preventDefault();
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Message:
          <textarea value={this.state.text} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite fruit:
          <select value={this.state.favFruit} onChange={this.handleFruitChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            <option value="banana">Banana</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
};

export default Contact;
//export to App.js