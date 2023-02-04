import React, {Component} from "react";
import './App.css';
import BurgerPane from "./components/BurgerPane";



class BurgerApp extends  Component {
  render() {


    return (
      <div className="container"> 

      <BurgerPane />
      </div>
    )
  }
}

export default BurgerApp;
