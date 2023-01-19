

import './App.css';
import Welcome from './component/welcome';

import React, { Component } from 'react';



class App extends Component {  
  
  state={data:""}

  changeState = () => {  
    let name=document.getElementById("name").value;
    this.setState({data:name}); 
       }; 

  render(){   
      return (     
          <div className="App">  
          <p>Enter your name</p><input id='name' type="text"/><button   onClick={this.changeState} type="button">Submit</button> 
              <Welcome data={this.state.data} />   
               
                
           
                     
              </div>  
      );          
  }}

  export default App; 
