import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

let loanStatuses = ['All', 'Chared Off', 'Current', 'Default', 'Fully Paid', 'In Grace Period', 
					'Late (16-30 days)', 'Late (31-120 days)'];

export default class LoanStatusDropDown extends Component {

	render() {
		var currentStatus;
		// identifies if there is a selected item
		if (!this.props.filters.trendLoanStatus) {
			currentStatus = 'All';
		} else {
			currentStatus = this.props.filters.trendLoanStatus;
		}

		var listItems = loanStatuses.map(function(item, index) {
	      return (
	        <MenuItem key={index} id={item}>{item}
	        </MenuItem>
	      )
	    }.bind(this));

	  	return (
	  		<div>
	  			<div>
	  				<label>Loan Status:</label>
	  				<ButtonToolbar>
						<DropdownButton 
							bsStyle='default'
							title={currentStatus} 
							key='1' 
							id='loan grade'
							onSelect={ this.props.onStatusSelected }
						>
							{listItems}
						</DropdownButton>
					</ButtonToolbar>
	  			</div>

	  		</div>
    	)
	}

}