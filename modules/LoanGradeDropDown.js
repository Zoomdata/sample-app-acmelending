import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

export default class LoanGradeDropDown extends Component {

	render() {

		// fills up the loan grades list
		var items;

		if (!this.props.items) {
			items = [];
		} else {
			items = this.props.items;
		}

		// prepares labels
		var labels = items.map(function(item) {
			return item.group[0];
		});
		labels.sort();
		labels.unshift("All");

		var title;
		// identifies if there is a selected item
		if (!this.props.filters.trendLoanGrade) {
			title = 'All';
		} else {
			title = this.props.filters.trendLoanGrade;
		}

		var listItems = labels.map(function(item, index) {
	      return (
	        <MenuItem key={index} id={item}>{item}
	        </MenuItem>
	      )
	    }.bind(this));

	  	return (
	  		<div>
	  			<div>
	  				<label>Loan Grade:</label>
	  				<ButtonToolbar>
						<DropdownButton 
							bsStyle='default' 
							title={title} 
							key='1' 
							id='loan grade'
							onSelect={ this.props.onGradeSelected }
						>
							{listItems}
						</DropdownButton>
					</ButtonToolbar>
	  			</div>

	  		</div>
    	)
	}

}
