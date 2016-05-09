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

		var itemSelected = this.props.filters[this.props.filterField];
		var title;
		// identifies if there is a selected item
		if (!itemSelected) {
			title = 'All';
		} else {
			title = itemSelected;
		}

		var listItems = labels.map(function(item, index) {
	      return (
	        <MenuItem key={index} eventKey={item} id={item}>{item}
	        </MenuItem>
	      )
	    }.bind(this));

	  	return (
	  			<div>
	  				<label>Loan Grade</label>
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
    	)
	}

}
