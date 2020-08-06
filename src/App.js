import React, { Component } from 'react';
import './App.css';
import Controls from './Components/Controls/Controls'
import Coordinates from './Components/Coordinates/Coordinates'

class App extends Component {
  constructor (props){
    super(props)
    this.state={
      showCoordinates:false,
      DisplayData:<div>hhi</div>
    }
  

  }



  render(){
  return (
    
    <div className="App">
      <div className="TitleBlock"> 
      <div>Minecraft Circle Generator</div>
    
      </div>
      <Controls/>
      <div className="Signature"> 
      <div className="ContactBlock">
      <div className="ContactItems">Dorian Kinoo Crutcher</div>
      <div className="ContactItems">Email: doriankinoorutcher@gmail.com</div>
      </div>
      </div>
    </div>
    
  );
  }
}

export default App;
