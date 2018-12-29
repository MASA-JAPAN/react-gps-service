import React from 'react';
import {connect} from 'react-redux';

import {setSortKey} from '../actions/';

const HotelsClickableTh = (props) => (
    <th className="hotels-clickable-th" 
    onClick={() => props.setSortKey(props.sortKey)}>
    {props.label}{props.isSelected ? '▲':''}</th>
);

export default connect(
    (state, ownProps) => ({
        isSelected: ownProps.sortKey===state.sortKey,
      }),
      {setSortKey},
    )(HotelsClickableTh);