import React, { Component } from 'react';
import './App.css';

export default class addition extends Component {
    constructor(props){
        super();
        this.state ={
            valuesAdd : {
                x: props.values.x,
                y: props.values.y,
            }
        }
    }
componentWillReceiveProps(nextPros){
if(nextPros){ 
    this.setState({valuesAdd : nextPros.values})
}
}
addition(){
   let values = this.state.valuesAdd;
   let x = 0 ,y =0;
     x= parseInt(values.x);
    y = parseInt(values.y);
    let z= x+y;
    return z;

}
  render() {
    return (
      <div >{ this.addition()  ? 
       <span>Add result ::   {this.addition() } </span> :null}
      </div>
    );
  }
}

