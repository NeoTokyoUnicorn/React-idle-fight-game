import React, { PureComponent } from "react";

export default class HpBar1 extends PureComponent {
  render() {
    const xsize = 200;
    const ysize = 50;
    const x = this.props.x - xsize / 2;
    const y = this.props.y - ysize / 2;
    return (
//      <div style={{ position: "absolute", width: size, height: size, backgroundImage: "url(" + { p1Idle } + ")" , left: x, top: y }} />
      <div style={{ position: "absolute", width: xsize, height: ysize,  left: x, top: y }}>
        <progress id="health" value="100" max="100"></progress>
      </div>
    );
  }
}


//let health = document.getElementById("health")
//health.value -= 10; //Or whatever you want to do with it.
