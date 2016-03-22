var React = require('react');

var List = React.createClass({
	render: function(){
		var items;
		if (!this.props.items) {
			items = [];
		} else {
			items = this.props.items;
		}
		var listItems = items.map(function(item, index) {
	      return (
	        <li key={index}>
	          <span>
	            Group: {item.group} Avg Price: ${item.current.metrics.price.avg}
	          </span>
	        </li>
	      )
	    }.bind(this));

	  	return (
	      <ul>
	        {listItems}
	      </ul>
    	)
	}
});

module.exports = List;