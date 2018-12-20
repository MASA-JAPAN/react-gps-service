import React from 'react';

import HotelRow from './HotelRow'

const HotelsTable = ({hotels}) => (
    <table>
        <tbody>
            <tr><th>ホテル名</th></tr>
            {hotels.map(hotel => (<HotelRow key = {hotel.id} hotel = {hotel}/>))}
        </tbody>
    </table>

);

export default HotelsTable;
