import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readCurrentPrice } from '../actions/action_current_price';
import Title from './title';

class CurrentPrice extends Component{

    constructor (props){
        super(props)
        this.state={
            loading: true
        }
        const { id } = this.props.id
        if (id) this.props.readCurrentPrice(id) 
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return {
            loading: false 
        }
    }

    render(){
        return (
            <React.Fragment>
                <Title>銘柄名:{this.props.current_price.name}</Title>
                <Title>現在価格:{this.props.current_price.price}</Title>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ current_price : state.current_price })
const mapDispatchToProps = { readCurrentPrice }

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPrice)