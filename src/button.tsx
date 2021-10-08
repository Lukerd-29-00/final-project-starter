import React from "react";
import logo from "./logo.svg";
import "./App.css";


interface button(){
    border: String;
    onclick={() => counter++};
}

function buttonTarget() {
    return (
      <>
        <h1>Increase Counter</h1> 
        <style>
        border="none"
          color="pink"
          height = "200px"
          onClick={() => console.log("Counter Increased!")}
          radius = "50%"
          width = "200px"
        </style>
      </>
    );
  }

var buttonTarget = document.getElementsByClassName("btn")[0];
var counter = 1;

function incrementer(){
  buttonTarget.innerHTML  = counter.toString();
  counter++;
  return counter;
}


export default App;