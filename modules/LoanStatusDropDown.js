import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

let loanStatuses = ['All', 'Chared Off', 'Current', 'Default', 'Fully Paid', 'In Grace Period', 
					'Late (16-30 days)', 'Late (31-120 days)'];

/**
 * LoanStatusDropDown is a react component that renders the "Loan Status" drop-down by using the
 * DropdownButton component.  LoanStatusDropDown is used by VisibleTrend and VisibleDetails as an
 * example of component re-use.
 */
export default class LoanStatusDropDown extends Component {

	render() {
		var itemSelected = this.props.filters[this.props.filterField];
		var currentStatus;
		// identifies if there is a selected item
		if (!itemSelected) {
			currentStatus = 'All';
		} else {
			currentStatus = itemSelected;
		}

		var listItems = loanStatuses.map(function(item, index) {
	      return (
	        <MenuItem key={index} eventKey={item} id={item}>{item}
	        </MenuItem>
	      )
	    }.bind(this));

	  	return (
  			<div>
  				<label>Loan Status</label>
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
    	)
	}

}