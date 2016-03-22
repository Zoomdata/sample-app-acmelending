import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-left">
              <img src="/lendingClub.png"></img>
              Activity Dashboard
            </div>
            <div className="navbar-right ">
              <ul role="nav" className="nav nav-pills">
              	<li ><NavLink to="/" onlyActiveOnIndex > KPI </NavLink></li>
          			<li><NavLink to="/trend" > Trend </NavLink></li>
          			<li><NavLink to="/detail" > Detail </NavLink></li>
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

