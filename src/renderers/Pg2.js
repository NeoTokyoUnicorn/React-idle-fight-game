import React, { PureComponent } from "react";
import p2Idle from '../assets/p2Idle.gif';

export class Box2 extends PureComponent {
  render() {
    const xsize = 173;
    const ysize = 180;
    const x = this.props.x - xsize / 2;
    const y = this.props.y - ysize / 2;
    return (
//      <div style={{ position: "absolute", width: size, height: size, backgroundImage: "url(" + { p1Idle } + ")" , left: x, top: y }} />
      <div style={{ position: "absolute", width: xsize, height: ysize, backgroundImage : "url(" + p2Idle + ")",left: x, top: y }}/>
    );
  }
}