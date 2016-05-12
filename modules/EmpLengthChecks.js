import React, { Component } from 'react';
import { Input } from 'react-bootstrap';

let lengthOptions = ['< 1 year', '1 year', '2 years', '3 years', '4 years', 
					'5 years', '6 years', '7 years', '8 years', '9 years', '10+ years',
					'n/a'];

/**
 * EmpLengthChecks is a react component that renders the Employee Length checkboxes by using the
 * input bootstrap component.  EmpLengthChecks is used by VisibleTrend.
 */
export default class EmpLengthChecks extends Component {

	render() {
		var currentStatus;
		// identifies if there is a selected item
		if (!this.props.filters.trendEmpLength) {
			currentStatus = [];
		} else {
			currentStatus = this.props.filters.trendEmpLength;
		}

		var listItems = lengthOptions.map(function(item, index) {
			var active = (currentStatus.indexOf(item) > -1) ? true : false;
			return (
				<div className='form-group' key={index} >
					<span key={index} key={index} className='checkbox'>
						<label key={index}>
							<input
								type='checkbox'	
								checked={active} 						
								onChange={this.props.onEmpLengthSelected}
								key={index} 
								id={item} 
							/>
							{item}
						</label>
					</span>
				</div>

			)
	    }.bind(this));

		const wellStyles = {maxWidth: 170, marginBottom: 0};
	  	return (
  			<div>
  				<label>Employment Length</label>
				<div className='well' style={wellStyles}>
					{listItems}
				</div>
  			</div>
    	)
	}
}