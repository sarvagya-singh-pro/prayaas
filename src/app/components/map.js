import React from 'react';
import { Image } from '@mantine/core';
import ReactMapboxGl, { Layer,Feature, Marker, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const Map = (props) => {
 
  return (
<Image w={"80%"} src={'/map.png'} height={"500px"}/>
  );
};

export default Map;