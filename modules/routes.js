import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import VisibleTrend from './VisibleTrend'
import Details from './Details'
import Repo from './Repo'
import Home from './Home'

module.exports = (
    <Route path="/" component={App}>
  	  <IndexRoute component={Home}/>
  	  <Route path="/kpi" component={Home}/>
  	  <Route path="/trend" component={VisibleTrend}/>
      <Route path="/detail" component={Details}>
      	<Route path="/detail/:userName/:repoName" component={Repo}/>
      </Route>

    </Route>
)