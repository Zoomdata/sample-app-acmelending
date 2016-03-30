import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import VisibleTrend from './VisibleTrend'
import VisibleDetails from './VisibleDetails'
import Home from './Home'

module.exports = (
    <Route path="/zd-data-app-01" component={App}>
  	  <IndexRoute component={VisibleTrend}/>
  	  <Route path="/zd-data-app-01/trend" component={VisibleTrend}/>
  	  <Route path="/zd-data-app-01/kpi" component={Home}/>
      <Route path="/zd-data-app-01/detail" component={VisibleDetails}/>
    </Route>
)