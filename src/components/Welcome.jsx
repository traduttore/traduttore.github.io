import React from 'react'

import '../styles/app.css';

const interval = 10;
const letter_width = 40;
const numCubes = 20;
const welcomeMessage = "Welcome to the site!";

const default_x_pos = [];
const default_y_pos = [];

const speed = [];
const INIT_X = [];
const INIT_Y = [];
const INIT_IS_LEFT = [];
const INIT_IS_UP = [];
const INIT_COLOUR = [];

class Welcome extends React.Component {
    state = {
        x:INIT_X,
        y:INIT_Y,
        is_up:INIT_IS_UP,
        is_left:INIT_IS_LEFT,
        ctx: null,
        hover: false,
    }
    
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    moveObjects = () =>{
        this.state.ctx.clearRect(0,0,this.state.ctx.canvas.width,this.state.ctx.canvas.height)

        let isUp = this.state.is_up;
        let isLeft = this.state.is_left;
        let yloc = this.state.y;
        let xloc = this.state.x;
        if (this.state.hover === false){
            for (let counter = 0; counter < numCubes; counter++){
                if (yloc[counter]+letter_width > this.state.ctx.canvas.height){
                    isUp[counter] = true; 
                }
                if(yloc[counter] < 0){
                    isUp[counter] = false; 
                }
                if (xloc[counter]+letter_width > this.state.ctx.canvas.width){
                    isLeft[counter] = true; 
                }
                if(xloc[counter] < 0){
                    isLeft[counter] = false; 
                }
                yloc[counter] = yloc[counter] + (isUp[counter]? -speed[counter] : speed[counter]);
                xloc[counter] = xloc[counter] + (isLeft[counter]? -speed[counter] : speed[counter]);
                let ctxCol = this.state.ctx
                ctxCol.fillStyle = this.colour[counter];
                this.setState({
                    ctx: ctxCol,
                });

                this.state.ctx.fillRect(xloc[counter], yloc[counter], letter_width, letter_width); 

                ctxCol = this.state.ctx
                ctxCol.fillStyle = "#212424";
                ctxCol.font="20px Roboto Mono monospace";
                ctxCol.textAlign="center";
                ctxCol.textBaseline = "middle";
                this.setState({
                    ctx: ctxCol,
                });

                this.state.ctx.fillText(welcomeMessage[counter], xloc[counter]+letter_width/2, yloc[counter]+letter_width/2)
                this.setState({
                    y: yloc, 
                    x: xloc,
                });
            }
            this.setState({
                is_left: isLeft,
                is_up: isUp,
            });
        }
        else{
            for (let counter = 0; counter < numCubes; counter++){
                let ctxCol = this.state.ctx
                
                ctxCol.fillStyle = this.colour[counter];
                this.setState({
                    ctx: ctxCol,
                });

                this.state.ctx.fillRect(default_x_pos[counter], default_y_pos[counter], letter_width, letter_width);
                
                ctxCol.fillStyle = "#212424";
                ctxCol.font="20px Roboto Mono monospace";
                ctxCol.textAlign="center";
                ctxCol.textBaseline = "middle";
                this.setState({
                    ctx: ctxCol,
                });

                this.state.ctx.fillText(welcomeMessage[counter], default_x_pos[counter]+letter_width/2, default_y_pos[counter]+letter_width/2)
            }
        }
    }

    getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let colString = '#';
        for (var i = 0; i < 6; i++) {
            colString += letters[Math.floor(Math.random() * 16)];
        }
        return colString;
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        this.setState({ctx: ctx});
        ctx.canvas.width  = 0.8*window.innerWidth;
        ctx.canvas.height = 0.8*window.innerHeight;

        for (let counter = 0; counter < numCubes; counter++){
            default_x_pos[counter] = (ctx.canvas.width/2)-5*(letter_width+10)+(counter%(numCubes/2))*(letter_width+10);
            default_y_pos[counter] = (ctx.canvas.height/2)-20+((counter<(numCubes/2))?-(2*letter_width):(2*letter_width));
        }

        for (let count = 0; count < numCubes; count++){
            speed[count] = Math.random()*4;
            INIT_X[count] = Math.random()*ctx.canvas.width;
            INIT_Y[count] = Math.random()*ctx.canvas.height;
            INIT_IS_LEFT[count] = Boolean(Math.random()>0.5);
            INIT_IS_UP[count] = Boolean(Math.random()>0.5);
            INIT_COLOUR[count] = this.getRandomColor();
        }

        this.colour = INIT_COLOUR;

        setInterval(() => {this.moveObjects()
        }, interval)
    }

    handleHover(){
        if (this.state.hover === false){
            this.setState({hover: true})
        }
    }

    handleleaveHover(){
        if (this.state.hover === true){
            this.setState({hover: false})
        }
    }

    render() {
      return(
        <figure className = "container--graphics">
            <canvas className ="canvas" ref={this.canvasRef} />
            <div className="verticalContainer">
            <a className="launch" href="/About" 
            onMouseEnter={this.handleHover.bind(this)}
            onMouseLeave={this.handleleaveHover.bind(this)}>
                Launch
            </a>
            </div>
        </figure>
      )
    }
  }
  export default Welcome