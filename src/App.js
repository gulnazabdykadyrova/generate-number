import React from'react'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      generated:0,
      lowerInputValue:"",
      upperInputValue:""
    }
  }
  lowerLimit=(e)=>{
    this.setState({lowerInputValue:e.target.value})
  
  }

  upperLimit=(e)=>{
    this.setState({upperInputValue:e.target.value})
  
  }

  generate=()=>{
    const{lowerInputValue,upperInputValue}=this.state;
    let newNumber=(Math.floor(Math.random()*(parseInt(upperInputValue)-parseInt(lowerInputValue)+1)) + parseInt(lowerInputValue))
    this.setState({generated:newNumber})
  }

  clear=()=>{
    this.setState({generated:0,lowerInputValue:"",upperInputValue:""})
    
    
  }
  render(){
    return(
      <div className="container">
        <div className="content">
        <p>Lower Limit<input value={this.state.lowerInputValue} onChange={this.lowerLimit} /></p>
        <p>Upper Limit<input value={this.state.upperInputValue} onChange={this.upperLimit} /></p>
        <button onClick={this.generate}>Generate</button>
        <button onClick={this.clear}>Clear</button>
        <p>{this.state.generated}</p>
        </div>

      </div>
    )
  }
}
export default App;