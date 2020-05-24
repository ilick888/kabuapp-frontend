import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readCurrentPrice } from '../actions/action_current_price'

class CurrentPrice extends Component{

    constructor (props){
        super(props)
        this.state={
            loading: true
        }
        const { id } = this.props.id
        if (id) this.props.readCurrentPrice(id) 
    }

    componentWillReceiveProps() {
        this.setState({
            loading: false,
        })
        console.log(this.props)
    }

    render(){
        return (
            <React.Fragment>
                <div>銘柄名:{this.props.current_price.name}</div>
                <div>現在価格:{this.props.current_price.price}</div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ current_price : state.current_price })
const mapDispatchToProps = { readCurrentPrice }

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPrice)