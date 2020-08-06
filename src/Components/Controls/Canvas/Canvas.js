import React, { Component } from 'react';
import './Canvas.css'

class Canvas extends Component {
    constructor(props){
        super(props)
        this.state={
            Radius:0,
            width:0,
            height:0
            
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    Cwidth=window.innerWidth*0.3333;
    Cheight=this.Cwidth;
   
    CanvasStyle={
        display:'inline',
        marginLeft: window.innerWidth/3,
        transform: 'translateX(-50%)'
    }
    

    componentDidMount(){
        this.UpdateCanvas();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        //this.Cwidth=this.state.height*0.5;
       // this.Cheight=this.Cwidth;
        
    }

    componentWillUpdate(){
       
    }

    componentDidUpdate(){
        this.UpdateCanvas()
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }


    UpdateCanvas=()=>{

        //this is all assuming a radius of 5
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle='white';
        ctx.fillRect(0,0, this.Cwidth,this.Cwidth);
        ctx.fillStyle='Blue';
        this.makeSquares(this.props.radius,ctx);
        ctx.fillStyle='Black';
        this.makeGrid(this.props.radius,ctx);
    }

    makeSquares(r,ctx){
       
        let squareDim=this.Cwidth/(2*(r+1));
        //top right quadrant
        for(let i=0;i<r;i++){

            let y
            if (i===0){
                y=r-Math.floor((r**2-(i+1)**2)**0.5)
            }
            else{
                y=r-Math.floor((r**2-(i+1)**2)**0.5)
            }
          
            
            for(let z=0; z<r+1-y;z++){
            ctx.fillRect(this.Cwidth*(i/(2*(r+1)))+(this.Cwidth/2),this.Cwidth*(y+z)/(2*(r+1)),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))
            ctx.fillRect(-squareDim-this.Cwidth*(i/(2*(r+1)))+(this.Cwidth/2),this.Cwidth*(z+y)/(2*(r+1)),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))
            ctx.fillRect(this.Cwidth*((i)/(2*(r+1)))+(this.Cwidth/2),-squareDim+this.Cwidth+this.Cwidth*(-y-z)/(2*(r+1)),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))
            ctx.fillRect(-squareDim-this.Cwidth*(i/(2*(r+1)))+(this.Cwidth/2),-squareDim+this.Cwidth+this.Cwidth*(-z-y)/(2*(r+1)),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))

            ctx.fillRect(this.Cwidth*(y+z)/(2*(r+1)),this.Cwidth*(i/(2*(r+1)))+(this.Cwidth/2),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))
            ctx.fillRect(this.Cwidth*(z+y)/(2*(r+1)),-squareDim-this.Cwidth*(i/(2*(r+1)))+(this.Cwidth/2),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))
            ctx.fillRect(-squareDim+this.Cwidth+this.Cwidth*(-y-z)/(2*(r+1)),this.Cwidth*((i)/(2*(r+1)))+(this.Cwidth/2),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))
            ctx.fillRect(-squareDim+this.Cwidth+this.Cwidth*(-z-y)/(2*(r+1)),-squareDim-this.Cwidth*(i/(2*(r+1)))+(this.Cwidth/2),this.Cwidth/(2*(r+1)),this.Cwidth/(2*(r+1)))
            }
            
           


        }
        
    }

    makeGrid(r,ctx){
        
        for(let i=0;i<2*r+4;i++){
            ctx.fillRect(this.Cwidth*i/(2*r+2),0,r*0.1,this.Cheight);
            ctx.fillRect(0,this.Cheight*i/(2*r+2),this.Cwidth,r*0.1);
        }
        
    }

    render() {
        return (
            <React.Fragment>
                
                <div className='canvCont'>
                                <canvas style={this.CanvasStyle} width={`${this.Cwidth}px`} height={`${this.Cheight}px`} ref="canvas"></canvas>
                </div>
            </React.Fragment>

           
        );
    }
}

export default Canvas;