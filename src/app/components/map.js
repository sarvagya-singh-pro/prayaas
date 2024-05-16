import React from 'react';
import ReactMapboxGl, { Layer,Feature, Marker, ZoomControl } from 'react-mapbox-gl';

const Map = (props) => {
  const Mapbox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'
  });

  const mapStyle = 'mapbox://styles/mapbox/streets-v11';
  const mapContainerStyle = {
    width: '80%',
    height: '500px',

    marginTop:'30px',
    overflow: 'hidden',
    marginBottom:'30px',
    borderRadius:'1rem',
  };

  const zoomLevel = [12];
  console.log(props.cords)  
  return (
    <Mapbox
      style={mapStyle}
      containerStyle={mapContainerStyle}
      center={props.cords}
      zoom={[12]}
      scrollZoom={false}
    >
     
  

         </Mapbox>
  );
};

export default Map;