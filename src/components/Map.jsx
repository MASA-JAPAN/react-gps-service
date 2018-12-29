import React from 'react';
import { withGoogleMap, GoogleMap,Marker } from 'react-google-maps';


const InnerMap = withGoogleMap(({ location, marker }) =>(
    <GoogleMap
      defaultZoom={12}
      defaultCenter={location}
      center={location}
    >
      <Marker {...marker}/>
    </GoogleMap>
  ));

    
const Map = ({location}) => (
    <InnerMap 
      containerElement = {(<div/>)}
      mapElement={(<div className="map"/>)}
      location = {location}
      marker={{position:location}}
    />
  );

export default Map;