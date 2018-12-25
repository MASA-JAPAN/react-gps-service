import React from 'react';
const HotelsClickableTh = ({label,sortKey,isSelected,onSort}) => (
    <th className="hotel-clickable-th" onClick={() => onSort(sortKey)}>
    {label}{isSelected ? '▲':''}</th>
);

export default HotelsClickableTh;
