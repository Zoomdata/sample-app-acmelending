import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-root/ag-grid.css';
import 'ag-grid-root/theme-fresh.css';

var numeral = require('numeral');
let pageSize = 100;;
let allOfTheData;

export default class Pivot extends Component {
	onGridReady(params) {
        this.api = params.api;

        this.setupData();
    }

    setupData() {
    	if (!allOfTheData || allOfTheData.length === 0) {
        	allOfTheData = this.obtainPivotItems(this.props);       	
        }
        this.createNewDatasource();
        this.api.sizeColumnsToFit();
    }

    obtainPivotItems(props) {
    	var items;
		if (!props.items) {
			items = [];
		} else {
			items = props.items;
		}

		var pivotItems = items.map(function(item) {
			return {
				grade: item.group[0],
				loan_status: item.group[1],
				addr_state: item.group[2],
				// emp_length: item.group[3],
				// issue_d: item.group[4],
				calc_o_s_principal: numeral(item.current.metrics.calc_o_s_principal.calc).format('0,0'),
				calc_o_s: numeral(item.current.metrics.calc_o_s.calc).format('0,0'),
				calc_portfolio: numeral(item.current.metrics.calc_portfolio.calc).format('0,0'),
				calc_avg_size: numeral(item.current.metrics.calc_avg_size.calc).format('0,0')
			};
		});

		return pivotItems;
    }

    componentDidUpdate() {
        if (!this.api) {
            return;
        }
        this.setupData();
    }

	createNewDatasource() {
	    if (!allOfTheData) {
	        return;
	    }

	    var dataSource = {
	        rowCount: allOfTheData.length,
	        pageSize: pageSize,
	        getRows: function (params) {
	            var rowsThisPage = allOfTheData.slice(params.startRow, params.endRow);
                var lastRow = -1;
                if (allOfTheData.length <= params.endRow) {
                    lastRow = allOfTheData.length;
                }

                params.successCallback(rowsThisPage, lastRow);
	        }
	    };
	    this.api.setDatasource(dataSource);
	}

	onPageSizeChanged(newPageSize) {
	    pageSize = new Number(newPageSize);
	    createNewDatasource();
	}

   createColDefs() {
        const leftAlignStyle = {
            'text-align': 'left'
        };
        const centerAlignStyle = {
            'text-align': 'center'
        }
        const rightAlignStyle = {
            'text-align': 'right'
        }
        const makeAlignStyle = {
            'border-left': '1px solid #808080',
            'text-align': 'left'
        }
        const columnDefs = [
            {
                headerName: 'Loan Grade',
                field: 'grade',
                width: 100,
                suppressSorting: false,
                suppressSizeToFit: true,
                suppressMenu: true,
                cellStyle: centerAlignStyle
            },
            {
                headerName: 'Loan Status',
                field: 'loan_status',
                width: 200,
                suppressSorting: false,
                suppressSizeToFit: true,
                suppressMenu: true,
                cellStyle: leftAlignStyle
            },
            {
                headerName: 'Lendee State',
                field: 'addr_state',
                width: 100,
                suppressSorting: false,
                suppressSizeToFit: true,
                suppressMenu: true,
                cellStyle: centerAlignStyle
            },
            // {
            //     headerName: 'Emp Length',
            //     field: 'emp_length',
            //     width: 60,
            //     suppressSorting: false,
            //     suppressSizeToFit: true,
            //     suppressMenu: true,
            //     cellStyle: leftAlignStyle
            // },
            // {
            //     headerName: 'Issue D Day',
            //     field: 'issue_d',
            //     width: 200,
            //     suppressSorting: false,
            //     suppressSizeToFit: true,
            //     suppressMenu: true,
            //     cellStyle: leftAlignStyle
            // },
            {
                headerName: 'O/S Principal',
                field: 'calc_o_s_principal',
                width: 150,
                suppressSorting: true,
                suppressSizeToFit: true,
                suppressMenu: true,
                cellStyle: rightAlignStyle
            }
            ,
            {
                headerName: '% O/S',
                field: 'calc_o_s',
                width: 150,
                suppressSorting: true,
                suppressSizeToFit: true,
                suppressMenu: true,
                cellStyle: rightAlignStyle
            },
            {
                headerName: '% Portfolio',
                field: 'calc_portfolio',
                width: 150,
                suppressSorting: true,
                suppressSizeToFit: true,
                suppressMenu: true,
                cellStyle: rightAlignStyle
            },
            {
                headerName: 'Avg Size',
                field: 'calc_avg_size',
                width: 150,
                suppressSorting: true,
                suppressSizeToFit: true,
                suppressMenu: true,
                cellStyle: centerAlignStyle
            }
        ];
        return columnDefs;
    }


    componentWillUnmount() {
        this.api.destroy();
    }
    componentWillMount() {
        this.columnDefs = this.createColDefs();
    }

	render(){
		var columnDefs = this.createColDefs();

	  	return (

	        	<div    
	                    className='ag-fresh'
	                    style={{height: 530}}
	            >
			  		<AgGridReact 
			  			rowData={allOfTheData}
			  			onGridReady={this.onGridReady.bind(this)}
						columnDefs={columnDefs}
	                    enableSorting='true'
	                    enableFilter='false'
	                    headerHeight='55'
	                    rowHeight='28'
	                    suppressRowClickSelection='true'
	                    suppressCellSelection='true'
	                    rowModelType='pagination'
		             />
	             </div>


    	)
	}
}