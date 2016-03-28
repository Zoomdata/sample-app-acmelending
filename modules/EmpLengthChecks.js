import React, { Component } from 'react';
import { Input } from 'react-bootstrap';

let lengthOptions = ['< 1 year', '1 year', '2 years', '3 years', '4 years', 
					'5 years', '6 years', '7 years', '8 years', '9 years', '10+ years',
					'n/a'];

export default class EmploymentLength extends Component {

	render() {
		var currentStatus;
		// identifies if there is a selected item
		if (!this.props.filters.trendEmpLength) {
			currentStatus = 'All';
		} else {
			currentStatus = this.props.filters.trendEmpLength;
		}

		var listItems = lengthOptions.map(function(item, index) {
			var active = (item === currentStatus) ? true : false;
			return (
					<Input type='checkbox' 
							label={item} 
							key={index} id={item} 
							checked={active}  
							onClick={ this.props.onEmpLengthSelected  }
					/>
				)
	    }.bind(this));

		const wellStyles = {maxWidth: 200};
	  	return (
	  		<div>
	  			<div>
	  				<label>Employment Length:</label>
					<div className='well' style={wellStyles}>
						{listItems}
					</div>
	  			</div>

	  		</div>
    	)
	}

}