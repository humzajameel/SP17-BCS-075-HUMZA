import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import * as math from "mathjs";

 class App extends Component 
 {
  constructor(props) {
    super(props);
    //initializing states
    this.state = 
    {
      input: "0",
      lastAnswer: ""
    };
  }
  //function checking whether inserted value is between 0-9 inclusive 
  inArray = (needle, arr) => {
    let isExist = false;
    for(let i = 0; i < arr.length; i++) {
      if(needle == arr[i]) {
        isExist = true;
        break;
      }
    }
    return isExist;
  }
//function for adding input values 
  addToInput = (val) => {
    //updating operator if last entry is an operator and new operator is clicked then operator will be updated
    if(this.state.input.length > 0 && isNaN(val) && val !== ".") {
      //getting last input
      let getLastCharacter = this.state.input.substring(this.state.input.length-1, this.state.input.length);
      //checking if last input is an operator
      if(isNaN(getLastCharacter)) {
        this.setState({ input:  this.state.input.slice(0, -1) + val })
        return false;
      }
    }
    //replacing 0 with new entry
    if(this.state.input.length == 1 && this.inArray(val, [0,1,2,3,4,5,6,7,8,9]) && this.state.input[0] == '0') {
      this.setState({ input: val })
    } else {
      this.setState({ input: this.state.input + val });
    } 
  };
  //storing answer in lastAnswer
  // getting result of written expressions
  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input), lastAnswer: math.eval(this.state.input) });
  };
  //adding lastAnswer to current input
  lastAnswerHandler = () => {
    this.setState({input: this.state.input+this.state.lastAnswer})
  }

  handleDelete = () => {
    //if input length is greater than 0 then drop last input
    if(this.state.input.length>0)
    {
      this.setState({input: this.state.input.slice(0, -1)})
      return false;
    }
    //else set it to 0
    this.setState({ input: "0" })
  }
  //adding all the buttons and adding action listener to them
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className= "row">
            <Button handleClick={() => this.handleDelete()}>DEL</Button>
            <Button handleClick={() => this.setState({ input: "0" })}>C</Button>
            <Button handleClick={this.lastAnswerHandler}>Ans</Button>
            <Button handleClick={this.addToInput}>%</Button>
          </div> 
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}
export {App}

