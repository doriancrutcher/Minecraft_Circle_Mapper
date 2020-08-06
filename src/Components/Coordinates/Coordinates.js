import React, { Component } from 'react';
import Styles from './Coordinates.module.css'
class Coordinates extends Component {


     yval=(this.props.r**2-this.props.x**2)**0.5;

     coorCont={
         display:'flex',
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center'
     }

    render() {



        return (
            <React.Fragment>
                <div className={Styles.CoorCont}>
                <div>{this.props.x}</div>
                <div>{Math.floor(this.yval)}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Coordinates;