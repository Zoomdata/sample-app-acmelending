// modules/Home.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisibleDonut  from './VisibleDonut';
import VisibleKPIs  from './VisibleKPIs';

export default class VisibleDonutKPIs extends Component {

	render() {
		return (
			<div className="row" >
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
