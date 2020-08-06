import React, { Component } from 'react';
import Coordinates from './../Coordinates/Coordinates';
import Canvas from './Canvas/Canvas'
import Styles from './Controls.module.css';


import PropTypes from 'prop-types';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state={
            One:0,
            Radius:0,
            CoordinatesDisp:null,
            CanvasDisp:<Canvas radius={this.Radius}/>
        }

                this.TextInput=React.createRef();


    }

    componentWillMount() {
        console.log('willMount')


    }

    componentDidMount() {
        console.log('Component did Mount')


    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState){
        
    
        return true
    }

    componentWillUpdate(nextProps, nextState) {

        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {

    }

    

    Functions
    getTextVal=()=>{
        return this.TextInput.value
    }

    DisplayOne=()=>{
        console.log('button hit')
        this.setState({One:1})
    }

      ChartData=()=>{
    let r=parseInt(this.TextInput.current.value)
    this.setState({
        CanvasDisp:<Canvas radius={r}/>

    })

    let Output=[]
    for (let i = 0 ; i<r+1 ;i++){
      Output.push(<Coordinates x={i} r={r}/>)
    }

   
    this.setState({CoordinatesDisp:Output})
    
    
   
  }

    

    render() {

       
        console.log('render')
        return (
            <React.Fragment>
                <div className={Styles.ControlsContainer}>
                <div className={Styles.CoorCont}>
                    <div>
                {/* {(this.state.CoordinatesDisp)?this.state.CoordinatesDisp:null} */}
                    </div>
                    {this.state.CanvasDisp}

                </div>
                <input text='input' placeholder="Enter Radius" ref={this.TextInput}></input>
                <button onClick={this.ChartData}>Submit</button>
                </div>
            </React.Fragment>
        );
    }
}



export default Controls;

// class Controls extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             radius:0,
//             CoordinatesDisp:null,
//             CanvasC:<Canvas radius={9}/>

//         }
//         this.TextInput=React.createRef();
        
//     }



    

//     getTextVal=()=>{
//         return this.TextInput.value
//     }

    


//   ChartData=()=>{
//     let r=parseInt(this.TextInput.current.value)
//     let Output=[]
//     for (let i = 0 ; i<r+1 ;i++){
//       Output.push(<Coordinates x={i} r={r}/>)
//     }
//     console.log(Output)
//     this.setState({CoordinatesDisp:Output})
//     console.log(this.state.CoordinatesDisp)
//     this.updateCanvas(r)
//   }
//   updateCanvas=(r)=>{
//     this.CanvOut=<Canvas radius={r}/>
// }
//     CanvOut=<Canvas></Canvas>
//     render() {
       

//         return (
//             <React.Fragment>
//                 {this.CanvOut}
            
//                 <div className={Styles.CoorCont}>
//                     {this.state.CoordinatesDisp}
//                 </div>
//                 <input text='input' placeholder="Enter Radius" ref={this.TextInput}></input>
//                 <button onClick={this.ChartData}>Submit</button>
//             </React.Fragment>
//         );
//     }
// }


// export default Controls;