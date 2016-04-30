import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import image from '../images/AcmeLoans-small.png';

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-left">
              <div style={{paddingLeft: '15', paddingTop:'5'}}>
                <img  src={image}></img>
                <div style={{float:'right', paddingLeft: '30', paddingTop: '7', verticalAlign: 'middle', fontSize: '20'}}>Activity Dashboard</div>
              </div>
            </div>
            <div className="navbar-right ">
              <ul role="nav" className="nav nav-pills">
                <li><NavLink to="/zd-data-app-01/" > Trend </NavLink></li>
              	<li ><NavLink to="/zd-data-app-01/kpi" onlyActiveOnIndex > KPI </NavLink></li>
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

