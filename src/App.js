import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers/Pg1";
import { Box2 } from "./renderers/Pg2";
import { MoveBox } from "./systems"
import bg1 from "./assets/bg1.gif";

export default class App extends PureComponent {
  render() {
    return (
      <GameEngine
        //style={{ width: 800, height: 600, backgroundColor: "Red" }}
        style={{ width: 800, height: 600, backgroundImage: "url(" + bg1 + ")", backgroundSize: 'cover',
        overflow: 'hidden' }} 
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
         box1: { x: 600,  y: 450, renderer: <Box />},
         box2: { x: 200,  y: 450, renderer: <Box2 />}
        }}>

      </GameEngine>
    );
  }
}