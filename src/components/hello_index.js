import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from "../actions";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
  } from 'material-ui/Table'
import _ from 'lodash';
import CandleChart from './candlechart';
  



class HelloIndex extends Component{

    constructor (props){
        super(props)
        const { id } = this.props.match.params
        if (id) this.props.readEvents(id) 
    }

    renderEvents(){
        return _.map(this.props.stock_prices, price => (
          <TableRow key={price.date}>
            <TableRowColumn>{price.date}</TableRowColumn>
            <TableRowColumn>{price.open}</TableRowColumn>
            <TableRowColumn>{price.high}</TableRowColumn>
            <TableRowColumn>{price.low}</TableRowColumn>
            <TableRowColumn>{price.close}</TableRowColumn>
            <TableRowColumn>{price.volume}</TableRowColumn>
            <TableRowColumn>{price.adjustment}</TableRowColumn>
          </TableRow> 
        ))
    }

    render(){
        return (
            <React.Fragment>
                <CandleChart stock_prices={this.props.stock_prices}/>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}> 
                        <TableRow>
                            <TableHeaderColumn>日付</TableHeaderColumn>
                            <TableHeaderColumn>始値</TableHeaderColumn>
                            <TableHeaderColumn>高値</TableHeaderColumn>
                            <TableHeaderColumn>安値</TableHeaderColumn>
                            <TableHeaderColumn>終値</TableHeaderColumn>
                            <TableHeaderColumn>出来高</TableHeaderColumn>
                            <TableHeaderColumn>終値調整</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.renderEvents()}
                    </TableBody>
                </Table>
            </React.Fragment>
    
        )
    }
}

const mapStateToProps = state => ({ stock_prices : state.stock_price })
const mapDispatchToProps = { readEvents }

export default connect(mapStateToProps, mapDispatchToProps)(HelloIndex)

