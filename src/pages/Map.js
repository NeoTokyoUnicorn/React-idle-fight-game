import React from 'react';
import ImageMapper from 'react-img-mapper';
import Map1 from '../assets/map.jpg';
import Areas1 from '../assets/map.json';

const Map = () => {
//  const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  const URL = Map1;
  const MAP = {
    name: 'Map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: Areas1,
  };

  const LoadLevel = () => {
    alert();
  };

      return (

      <ImageMapper src={URL} map={MAP} onClick={LoadLevel}/>

  )
}

export default Map;