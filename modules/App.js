import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import image from '../images/lendingClub.png';

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-left">
              <img src={image}></img>
              Activity Dashboard
            </div>
            <div className="navbar-right ">
              <ul role="nav" className="nav nav-pills">
              	<li ><NavLink to="/zd-data-app-01" onlyActiveOnIndex > KPI </NavLink></li>
          			<li><NavLink to="/zd-data-app-01/trend" > Trend </NavLink></li>
          			<li><NavLink to="/zd-data-app-01/detail" > Detail </NavLink></li>
              </ul>
            </div>
          </div> 
        </nav>

        <div className="container-fluid">
        {this.props.children}
        </div>

      </div>
    )
  }
})

