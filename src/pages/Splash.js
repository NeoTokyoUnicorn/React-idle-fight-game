import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Intro1 from '../assets/intro.mp4';
import button1 from '../assets/buttonPlay.gif';
import Map from "./Map";

const LoadMap = () => {
    this.props.history.push(Map);
}

class Splash extends Component {
    render () {
        return (
        <div><div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= {Intro1}
            width='70%'
            height='70%'
            controls = {false}
            loop = {false}
            playing = {true}
            muted = {true}
            />
        </div>
        <div onClick={LoadMap}><img src={button1} alt='Play game'></img>     
        </div>
        </div>
        )
    }
}
  
export default Splash;