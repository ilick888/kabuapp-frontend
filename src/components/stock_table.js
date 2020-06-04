import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readStockPrice } from "../actions/action_stock_price";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import _ from 'lodash';


class StockTable extends Component{

    constructor (props){
        super(props)
        const { id } = this.props.id
        if (id) this.props.readStockPrice(id) 
    }

    renderEvents(){
        const slice_data = Object.fromEntries(
            Object.entries(this.props.stock_prices).slice(0, 5)
        )        
        return _.map(slice_data, price => (
          <TableRow key={price.date}>
            <TableCell>{price.date}</TableCell>
            <TableCell>{price.open}</TableCell>
            <TableCell>{price.high}</TableCell>
            <TableCell>{price.low}</TableCell>
            <TableCell>{price.close}</TableCell>
            <TableCell>{price.volume}</TableCell>
            <TableCell>{price.adjustment}</TableCell>
          </TableRow> 
        ))
    }

    render(){
        return (
            <React.Fragment>
                <Table>
                    <TableHead> 
                        <TableRow>
                            <TableCell>日付</TableCell>
                            <TableCell>始値</TableCell>
                            <TableCell>高値</TableCell>
                            <TableCell>安値</TableCell>
                            <TableCell>終値</TableCell>
                            <TableCell>出来高</TableCell>
                            <TableCell>終値調整</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderEvents()}
                    </TableBody>
                </Table>
            </React.Fragment>
    
        )
    }
}

const mapStateToProps = state => ({ stock_prices : state.stock_price })
const mapDispatchToProps = { readStockPrice }

export default connect(mapStateToProps, mapDispatchToProps)(StockTable)