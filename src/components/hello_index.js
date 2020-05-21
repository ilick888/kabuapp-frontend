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

    componentDidMount(){
        const { id } = this.props.match.params
        if (id) this.props.readEvents(id)
    }

    renderEvents(){
        return _.map(this.props.events, event => (
          <TableRow key={event.date}>
            <TableRowColumn>{event.date}</TableRowColumn>
            <TableRowColumn>{event.open}</TableRowColumn>
            <TableRowColumn>{event.high}</TableRowColumn>
            <TableRowColumn>{event.low}</TableRowColumn>
            <TableRowColumn>{event.close}</TableRowColumn>
            <TableRowColumn>{event.volume}</TableRowColumn>
            <TableRowColumn>{event.adjustment}</TableRowColumn>
          </TableRow> 
        ))
    }

    
    
    render(){
        return (
            <React.Fragment>
                <CandleChart/>
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

const mapStateToProps = state => ({ events : state.hello })
const mapDispatchToProps = { readEvents }

export default connect(mapStateToProps, mapDispatchToProps)(HelloIndex)

