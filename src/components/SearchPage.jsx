import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';

import { startSearch } from '../actions/';

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
    }

  render() {
    return (
      <div className="search-page">
        <h1 className="App-title">ホテル検索</h1>
        <SearchForm history={this.props.history}/>
        <div className="result-area">
          <Map location={this.props.geocodeResult.location}/>
          <div className="result-right">
            <GeocodeResult 
            address={this.props.geocodeResult.address}
            location={this.props.geocodeResult.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable/>            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  geocodeResult:state.geocodeResult,
});


export default connect(mapStateToProps)(SearchPage);

