// modules/Home.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisibleDonut  from './VisibleDonut';
import VisibleKPIs  from './VisibleKPIs';

/**
 * VisibleDonutKPIs is a composite of VisibleDonut and VisibleKPIs.
 */
export default class VisibleDonutKPIs extends Component {

	render() {
		return (
			<div className="row" >
				<div className="col-xs-6" style={{minWidth: '444',textAlign:'-webkit-center'}} >
					<VisibleDonut/>
				</div>			
				<div className="col-xs-6">
					<VisibleKPIs/>
				</div>

			</div>
		)
	}

}
