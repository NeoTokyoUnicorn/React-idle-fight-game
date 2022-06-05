import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Intro1 from '../assets/intro.mp4';
import button1 from '../assets/buttonPlay.gif';

const LoadMap = () => {
    alert('pushed');
    window.location.href = "./Map";
}

class Splash extends Component {

     render () {
        return (
        <div><div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= {Intro1}
            width='50%'
            height='50%'
            controls = {false}
            loop = {false}
            playing = {true}
            muted = {true}
            />
        </div>
        <div><button>< img src={button1} alt="Play" onClick={LoadMap} />Play</button>     
        </div>
        </div>
        )
    }
}
  
export default Splash;