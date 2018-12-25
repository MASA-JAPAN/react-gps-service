import React from 'react';

import HotelRow from './HotelRow'
import HotelsClickableTh from './HotelsClickableTh'

const HotelsTable = ({hotels, sortKey,onSort}) => (
    <table>
        <tbody>
            <tr>
                <th>画像</th>
                <th>ホテル名</th>
                <HotelsClickableTh
                label = "値段"
                sortKey="price"
                isSelected={sortKey==='price'}
                onSort={key => onSort(key)}/>
                <HotelsClickableTh
                label = "レビュー"
                sortKey="reviewAverage"
                isSelected={sortKey==='reviewAverage'}
                onSort={key => onSort(key)}/>
                <th>レビュー件数</th>
                <th>距離</th>
            </tr>
            {hotels.map(hotel => (<HotelRow key = {hotel.id} hotel = {hotel}/>))}
        </tbody>
    </table>

);

export default HotelsTable;
