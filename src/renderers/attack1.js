import React, { PureComponent } from "react";
import attack1 from '../assets/attack.gif';
import attack2 from '../assets/attack2.gif';

export default class BtnAttack1 extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.isToggleOn);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const xsize = 160;
    const ysize = 160;
    let iconBg;
    const x = this.props.x - xsize / 2;
    const y = this.props.y - ysize / 2;
    if (this.state.isToggleOn) {
      iconBg = attack1;
    } else {
      iconBg = attack2;
    }
    return (
      <div style={{ position: "absolute", width: xsize, height: ysize, 
      backgroundImage : "url(" + 
      iconBg  
      + ")", 
      backgroundRepeat: "no-repeat", left: x, top: y }} onClick={() => this.handleClick()}/>
    );
  }
}