import React, { Component } from 'react';
import './App.css';


export default class Deletion extends Component {
    constructor(props){
        super();
        this.state ={
           valuesDelete :{x:props.values.x,y:props.values.y}
        }
    }
    componentWillReceiveProps(nextPros){
    if(nextPros){
      this.setState({valuesDelete: nextPros.values})
    }
    }
    deletion(){
        let values = this.state.valuesDelete;
        let x = 0 ,y =0;
          x= parseInt(values.x);
         y = parseInt(values.y);
         let z= x-y;
         return z;
     }
  render() {
    return (
      <div> { this.deletion()  ?  
      <span>
       substraction result :: {this.deletion()}  
       </span> : null}
      </div>
    );
  }
}

