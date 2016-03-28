// modules/Home.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisibleDonut  from './VisibleDonut';
import VisibleKPIs  from './VisibleKPIs';

var controlStyle = {
  padding: '30',

};

export default class Home extends Component {

	render() {
		return (
			<div className="row" style={controlStyle}>
				<div className="col-md-6">
					<VisibleDonut/>
				</div>			
				<div className="col-md-6">
					<VisibleKPIs/>
				</div>

			</div>
		)
	}

}
