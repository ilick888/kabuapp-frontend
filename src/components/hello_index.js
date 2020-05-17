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
  



class HelloIndex extends Component{

    componentDidMount(){
        this.props.readEvents()
    }

    renderEvents(){
        return _.map(this.props.events, event => (
          <TableRow key={event.id}>
            <TableRowColumn>{event.id}</TableRowColumn>
            <TableRowColumn>{event.title}</TableRowColumn>
            <TableRowColumn>{event.subtitle}</TableRowColumn>
          </TableRow> 
        ))
    }

    
    
    render(){
        return (
            <React.Fragment>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}> 
                        <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Subtitle</TableHeaderColumn>
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

