import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers/Pg1";
import { Box2 } from "./renderers/Pg2";
import { MoveBox } from "./systems"
import bg1 from "./assets/bg1.gif";
import BtnAttack1 from "./renderers/attack1";
import BtnDefend1 from "./renderers/defend1";
import HpBar1 from "./renderers/hp1";

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
         box1: { x: 700,  y: 530, renderer: <Box />},
         box2: { x: 100,  y: 530, renderer: <Box2 />},
         attackbox1: { x: 200,  y: 200, renderer: <BtnAttack1 />},
         defendbox1: { x: 150,  y: 200, renderer: <BtnDefend1 />},
         hpbar1: { x: 180,  y: 110, renderer: <HpBar1 />}
        }}>

      </GameEngine>
    );
  }
}