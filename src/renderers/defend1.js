import React, { PureComponent } from "react";
import defend1 from '../assets/defend.gif';

export default class BtnDefend1 extends PureComponent {
  render() {
    const xsize = 160;
    const ysize = 160;
    const x = this.props.x - xsize / 2;
    const y = this.props.y - ysize / 2;
    return (
//      <div style={{ position: "absolute", width: size, height: size, backgroundImage: "url(" + { p1Idle } + ")" , left: x, top: y }} />
      <div style={{ position: "absolute", width: xsize, height: ysize, backgroundImage : "url(" + defend1 + ")", backgroundRepeat: "no-repeat", left: x, top: y }}/>
    );
  }
}