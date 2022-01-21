import React from "react";

import "../styles/app.css";

export const interval = 10;
let letter_width = 60;
let letter_font;
export const numCubes = 20;
const welcomeMessage = "WELCOME TOTRADUTTORE!";

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
    x: INIT_X,
    y: INIT_Y,
    is_up: INIT_IS_UP,
    is_left: INIT_IS_LEFT,
    ctx: null,
    hover: false,
  };

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  fluctateColor = () => {
    for (let counter = 0; counter < numCubes; counter++) {
      this.colour[counter] =
        this.colour[counter].substring(0, 14) +
        (this.colour[counter].substring(14, 16) === "76"
          ? "36"
          : Number(this.colour[counter].substring(14, 16)) + 1) +
        this.colour[counter].substring(16);
    }
  };

  moveObjects = () => {
    this.state.ctx.clearRect(
      0,
      0,
      this.state.ctx.canvas.width,
      this.state.ctx.canvas.height
    );

    let isUp = this.state.is_up;
    let isLeft = this.state.is_left;
    let yloc = this.state.y;
    let xloc = this.state.x;
    for (let counter = 0; counter < numCubes; counter++) {
      if (this.state.hover === false) {
        if (yloc[counter] + letter_width > this.state.ctx.canvas.height) {
          isUp[counter] = true;
        }
        if (yloc[counter] < 0) {
          isUp[counter] = false;
        }
        if (xloc[counter] + letter_width > this.state.ctx.canvas.width) {
          isLeft[counter] = true;
        }
        if (xloc[counter] < 0) {
          isLeft[counter] = false;
        }
        yloc[counter] =
          yloc[counter] + (isUp[counter] ? -speed[counter] : speed[counter]);
        xloc[counter] =
          xloc[counter] + (isLeft[counter] ? -speed[counter] : speed[counter]);
      } else {
        if (yloc[counter] !== default_y_pos[counter]) {
          isUp[counter] = yloc[counter] > default_y_pos[counter];
        }
        if (xloc[counter] !== default_x_pos[counter]) {
          isLeft[counter] = xloc[counter] > default_x_pos[counter];
        }

        if (
          Math.abs(yloc[counter] - default_y_pos[counter]) >
          5 * speed[counter]
        ) {
          yloc[counter] =
            yloc[counter] +
            (isUp[counter] ? -5 * speed[counter] : 5 * speed[counter]);
        } else {
          yloc[counter] = default_y_pos[counter];
        }
        if (
          Math.abs(xloc[counter] - default_x_pos[counter]) >
          5 * speed[counter]
        ) {
          xloc[counter] =
            xloc[counter] +
            (isLeft[counter] ? -5 * speed[counter] : 5 * speed[counter]);
        } else {
          xloc[counter] = default_x_pos[counter];
        }
        if (
          counter === 0 &&
          xloc[counter] === default_x_pos[counter] &&
          yloc[counter] === default_y_pos[counter]
        ) {
          this.fluctateColor();
        }
      }
      let ctxCol = this.state.ctx;
      ctxCol.strokeStyle = this.colour[counter];
      ctxCol.fillStyle = this.colour[counter];
      ctxCol.font = letter_font;
      ctxCol.textAlign = "center";
      ctxCol.textBaseline = "middle";
      this.setState({
        ctx: ctxCol,
      });

      this.state.ctx.strokeRect(
        xloc[counter],
        yloc[counter],
        letter_width,
        letter_width
      );
      this.state.ctx.fillText(
        welcomeMessage[counter],
        xloc[counter] + letter_width / 2,
        yloc[counter] + letter_width / 2
      );
      this.setState({
        y: yloc,
        x: xloc,
      });
    }
    this.setState({
      is_left: isLeft,
      is_up: isUp,
    });
  };

  getRandomColor = () => {
    let h = 355;
    let s = Math.floor(Math.random() * 20) + 68;
    let l = Math.floor(Math.random() * 40) + 36;
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
  };

  componentDidMount() {
    const width = window.innerWidth;
    const adaptive_letter_width = Math.floor((1.5 * width) / numCubes);
    letter_width =
      adaptive_letter_width < letter_width
        ? adaptive_letter_width
        : letter_width;
    letter_font = Math.floor(0.5 * letter_width) + "px Arial";
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    this.setState({ ctx: ctx });
    ctx.canvas.width = 0.9 * window.innerWidth;
    ctx.canvas.height = 0.8 * window.innerHeight;

    for (let counter = 0; counter < numCubes; counter++) {
      default_x_pos[counter] =
        ctx.canvas.width / 2 -
        5 * (letter_width + 10) +
        (counter % (numCubes / 2)) * (letter_width + 10);
      default_y_pos[counter] =
        ctx.canvas.height / 2 -
        20 +
        (counter < numCubes / 2 ? -(2 * letter_width) : 2 * letter_width);
    }

    for (let count = 0; count < numCubes; count++) {
      speed[count] = Math.random() * 3 + 1;
      INIT_X[count] = Math.random() * ctx.canvas.width;
      INIT_Y[count] = Math.random() * ctx.canvas.height;
      INIT_IS_LEFT[count] = Boolean(Math.random() > 0.5);
      INIT_IS_UP[count] = Boolean(Math.random() > 0.5);
      INIT_COLOUR[count] = this.getRandomColor();
    }

    this.colour = INIT_COLOUR;

    setInterval(() => {
      this.moveObjects();
    }, interval);
  }

  handleHover() {
    if (this.state.hover === false) {
      this.setState({ hover: true });
    }
  }

  handleleaveHover() {
    if (this.state.hover === true) {
      this.setState({ hover: false });
    }
  }

  render() {
    return (
      <figure className="container--graphics">
        <canvas className="canvas" ref={this.canvasRef} />
        <div className="verticalContainer">
          <a
            className="launch"
            href="/Home/"
            onMouseEnter={this.handleHover.bind(this)}
            onMouseLeave={this.handleleaveHover.bind(this)}
          >
            ENTER
          </a>
        </div>
      </figure>
    );
  }
}
export default Welcome;
