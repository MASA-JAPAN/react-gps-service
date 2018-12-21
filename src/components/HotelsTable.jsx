import React from 'react';

import HotelRow from './HotelRow'

const HotelsTable = ({hotels}) => (
    <table>
        <tbody>
            <tr>
                <th>画像</th>
                <th>ホテル名</th>
                <th className="hotel-price-column">値段</th>
                <th>レビュー</th>
                <th>レビュー件数</th>
                <th>距離</th>
            </tr>
            {hotels.map(hotel => (<HotelRow key = {hotel.id} hotel = {hotel}/>))}
        </tbody>
    </table>

);

export default HotelsTable;
