import React from 'react';
import image from '../images/AcmeLoans-small.png';

import {Tab, TabContainer, Grid, Navbar, Nav, NavItem, Row, Col} from 'react-bootstrap'

import VisibleTrend from './VisibleTrend';
import VisibleDetails from './VisibleDetails';
import VisibleDonutKPIs from './VisibleDonutKPIs';

/**
 * Entry point of the application.  It places the main components of the application in a tab page layout.  
 * The main components of the application are:  
 * VisibleTrend
 * VisibleDonutKPIs
 * VisibleDetails
 */
export default React.createClass({
  render() {
    return (
      <div>
        <Tab.Container id="tabpanel" defaultActiveKey="first" style={{width: '100%'}}>
          <Grid>
            <Row className="navbar navbar-default" style={{minWidth: 800}}>
              <Col xs={7} md={6}>
                <div className="navbar-left" style={{paddingLeft: '15', paddingTop:'5'}}>
                  <img  src={image}></img>
                  <div style={{float:'right', paddingLeft: '30', paddingTop: '7', verticalAlign: 'middle', fontSize: '20'}}>Activity Dashboard</div>
                </div>
              </Col>
              <Col xs={4} md={6}>
                <div className="navbar-right" style={{paddingTop:'5', paddingRight: '10'}}>
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="first">
                      Trend
                    </NavItem>
                    <NavItem eventKey="second">
                      KPI
                    </NavItem>
                    <NavItem eventKey="third">
                      Detail
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>
            <Row className="clearfix">
              <Col xs={18} md={12}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">
                    <VisibleTrend/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <VisibleDonutKPIs/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <VisibleDetails/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Grid>
        </Tab.Container>
      </div>
    )
  }
})

