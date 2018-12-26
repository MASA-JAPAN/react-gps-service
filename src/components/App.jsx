import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';

const App =()=> (
  <div className="App">
    <ul className='left-navi'>
      <li><a href="/">ホテル検索</a></li>
      <li><a href="/about">About</a></li>
    </ul>
    <SearchPage/>
  </div>
);


export default App;
