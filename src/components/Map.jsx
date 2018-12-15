import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

console.log()

const InnerMap = withGoogleMap(props =>(
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 35.6585805, lng: 139.7454329 }}
      center={props.position}
    >
    </GoogleMap>
  ));

const Map = ({lat, lng}) => (
  <InnerMap 
  containerElement = {(<div/>)}
  mapElement={(<div className="map"/>)}
  position = {{lat,lng}}
  />
);

export default Map;