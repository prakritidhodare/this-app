import React, { Component } from 'react';
import logo from './logo.svg';
import Add from './addition.js'
import Delete from './deletion.js'
import './App.css';

class App extends Component {
    constructor(props){
      super();
     this.state= {
       values:{
        x: 0, y :0
       },
       valuesDelete:{
        x:0 , y:0
       },
       showAddPage:false,
       showSubPage:false,
     }
    }
    forSub(page){
    let x1 =this.refs.valX.value;
    let y1 = this.refs.valY.value;
    let values = this.state.values;
    values.x =x1;
    values.y =y1;
  
   
    if(page == "add"){
      this.setState({values:values})
      let valuesDel = {
        x:0, y:0
      }
      this.setState({valuesDelete:valuesDel})
    }else{
      let valuesAdd = {
        x:0, y:0
      }
      this.setState({valuesDelete:values , values :valuesAdd})
    }
  }
 
  render() {
    return (
      <div className="App">
        <p className = "welcome-text" >QUICK RESULT</p>
       <span className="inputs" > value x : </span><input type="number" ref ="valX" placeholder="enter value of x"/> <br/>
       <span className="inputs"> value y : </span><input type="number" ref ="valY" placeholder="enter value of y"/> <br/><br/>
        <button onClick={this.forSub.bind(this,"add")}>For adding</button><br/><br/>
        <button onClick={this.forSub.bind(this,"delete")}>For substract</button><br/>
        
        <div>
          
          <Add values={this.state.values}/> 
          
          <Delete values={this.state.valuesDelete}/>
        </div> 

    

      </div>
    );
  }
}

export default App;
