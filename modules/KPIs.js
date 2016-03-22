var React = require('react');
var numeral = require('numeral');
import { FilterStatuses } from '../actions'

var KPIs = React.createClass({
	render: function(){
		var items;
		if (!this.props.items) {
			items = [];
		} else {
			items = this.props.items;
		}

		var itemGroup, portfolioPercent = 0, totalLoans = 0;

		if (!this.props.filters.loanGrade) {
			itemGroup = 'All';
		} else {
			itemGroup = this.props.filters.loanGrade;
		}

		if (itemGroup === 'All') {
			for (let item of items) {
			    totalLoans += item.current.count;
			    portfolioPercent += item.current.metrics.calc_portfolio.calc;
			};
		} else {
			for (let item of items) {
				if (item.group[0] == itemGroup) {
					totalLoans = item.current.count;
					portfolioPercent = item.current.metrics.calc_portfolio.calc;
				}
			};
		}

	  	return (
	      <div>
	        <p><b>Loan Grade:</b> {itemGroup}</p>
	        <p><b>Number of Loans:</b> {numeral(totalLoans).format('0,0')}</p>
	        <p><b>% of Portfolio:</b> { numeral(portfolioPercent).format('0.00')} %</p>
	      </div>
    	)
	}
});

module.exports = KPIs;