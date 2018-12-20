import React from 'react';
import { withGoogleMap, GoogleMap,Marker } from 'react-google-maps';


const InnerMap = withGoogleMap(props =>(
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 35.6585805, lng: 139.7454329 }}
      center={props.position}
    >
      <Marker {...props.marker}/>
    </GoogleMap>
  ));

    
const Map = ({location}) => (
    <InnerMap 
      containerElement = {(<div/>)}
      mapElement={(<div className="map"/>)}
      position = {location}
      marker={{position:location}}
    />
  );

export default Map;