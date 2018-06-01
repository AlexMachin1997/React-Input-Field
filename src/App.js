import React, { Component } from 'react';
import './App.css';
import Validation from "./ValidationComponent/ValidationComponent";
import Char from "./Char/Char";
class App extends Component {
 
  state = {
    userInput: ''
  }

  //Event is used for input based events 
  inputChangeHandler = (event) => {
    this.setState({userInput : event.target.value});
  }

  DeleteCharHandler = (index) => {
    const text = this.state.userInput.split(''); //Copies String By Spliting String Into Array Of Strings
    text.splice(index,1); //Removing 
    const updatedChar = text.join(''); //Joins Elements Together
    this.setState({userInput : updatedChar}); //Sets userInput 
  }
 
  render() {
    
    //Stirngs Are Not Arrays .split(' ')
    //Splits Into An Arrray After Every Character And Loops Through Component
    //Map Creates A New List
    //Index is used to assign the values a unique id, since the array elements are unique
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char 
                character ={ch} 
                key={index}
                clicked ={() => this.DeleteCharHandler(index)} 
              />;
    });
    
    return (
      <div className="App">
        
        <input type="text" 
          onChange ={this.inputChangeHandler} 
          value = {this.state.userInput} 
        />

        <p> Your Input : {this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>     
    );
  }
}

export default App;
