import React from 'react';

const GeocodeResult = ({address,location}) => (
    <ul className="geocode-result">
        <li>住所:{address}</li>
        <li>緯度:{location.lat}</li>
        <li>経度:{location.lng}</li>
    </ul>
);

export default GeocodeResult;
