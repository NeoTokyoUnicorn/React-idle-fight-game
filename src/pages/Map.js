import React from 'react';
import ImageMapper from 'react-img-mapper';
import Map1 from '../assets/map.jpg';
import Areas1 from '../assets/map.json';

const LoadLevel = (props) => {
  switch (props) {
    case '1':
      window.location.href = "../App";
      break
    case '29':
      window.location.href = "../App";
      break
    default:
      return null
  }
}

const Map = props => {
//  const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  const URL = Map1;
  const MAP = {
    name: 'Motavia',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: Areas1
  };

  return (
      
      <ImageMapper 
        src={URL} 
        map={MAP}
        onClick={(areas) => LoadLevel(areas.name)}
      />

  )
}

export default Map;