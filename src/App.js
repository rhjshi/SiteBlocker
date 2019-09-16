import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Test from './components/test';

class App extends React.Component {
  //use local storage and then store the websites as keys
  constructor(props){
    super(props);
    this.state = {websites: [], inputField:''};

    //define to use the local-storage api
    this.localStorage = require('local-storage');
    // put in example site
    this.localStorage("*://*.youtube.com/", 10);
    this.localStorage('test', 'This has worked');

    // needed to properly use 'this' in function
    this.submitSite = this.submitSite.bind(this);
  }

  //this is in the context where
  handleInputChange = (event)=>{
    this.setState({inputField : event.target.value});
  }

  clearSites = () => {
    alert(this.localStorage('foo'))
  }

  //this is defined as what called it
  submitSite(event){
    alert('Blocking '+this.state.inputField);
    //prevents browser reload/refresh
    event.preventDefault();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          <form onSubmit={this.submitSite}>
            <label>
              Site:&nbsp;
              <input type="text" value={this.state.inputField} onChange={this.handleInputChange}></input>
            </label>
            &nbsp;<input type="Submit" value="Block"></input>
          </form>
          <a className="App-link" href="#" onClick={this.clearSites}>Clear all blocked sites</a>

        </header>
      </div>
    );
  }
}

export default App;
