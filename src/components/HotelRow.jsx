import React from 'react';

const HotelRow = ({hotel}) => (
    <tr>
        <td><img src={hotel.thumbUrl} alt={hotel.name}/></td>
        <td><a href={hotel.url} target="_blank" rel="noopener noreferrer">{hotel.name}</a></td>
        <td>{hotel.price ? `${hotel.price}円`:'空室なし'}</td>
        <td>{hotel.reviewAverage}</td>
        <td>{hotel.reviewCount}</td>
        <td>{hotel.distance}</td>
    </tr>
);

export default HotelRow;
