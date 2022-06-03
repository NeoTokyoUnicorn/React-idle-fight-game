import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Intro1 from '../assets/intro.mp4';

class Splash  extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= {Intro1}
            width='70%'
            height='70%'
            controls = {false}
            Loop = {true}
            playing = {true}
            muted = {true}

            />
        </div>
        )
    }
}
  
export default Splash;