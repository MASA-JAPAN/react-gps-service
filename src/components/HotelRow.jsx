import React from 'react';

const HotelRow = ({hotel}) => (
    <tr>
        <td><a href={hotel.url} target="_blank" rel="noopener noreferrer">{hotel.name}</a></td>
    </tr>
);

export default HotelRow;
