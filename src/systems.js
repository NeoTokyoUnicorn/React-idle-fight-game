const MoveBox = (entities, { input }) => {
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.
  
    const { payload } = input.find(x => x.name === "onMouseDown") || {};
//    const { payload } = input.find(x => x.name === "onKeyPress") || {};
  
    if (payload) {
      const box1 = entities["box1"];
 
/*       alert(payload.key);
      alert(payload.keyCode);

      switch(payload) {
        case 'foo':
          //return 'bar';
          let a = 1;
        default:
          let b = 1;
          //return 'foo';
      }
 */
      box1.x = payload.pageX;
      box1.y = payload.pageY;
    }
  
    return entities;
  };
  
  export { MoveBox };

  const MoveBox2 = (entities) => {
    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.
  
      const box2 = entities["box2"];
 
  
    return entities;
  };
  
  export { MoveBox2 };