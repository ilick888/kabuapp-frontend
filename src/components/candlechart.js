import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import _ from 'lodash';
import { CircularProgress } from '@material-ui/core';



class CandleChart extends Component{

    constructor(props){
        super(props)
        this.state = {
            loading :true,
        }
    }

    componentWillReceiveProps() {
        this.setState({
            loading: false,
        })
    }

    setjson(){
        var data = []
        _.map(this.props.stock_prices, price => (
            data.unshift([price.date, price.low, price.open, price.close, price.high])
        ))
        var datas = data.slice(200,300)
        datas.unshift(['day', 'a', 'b', 'c', 'd'])
        return datas
    }

    render(){
        if(this.state.loading){
            return null
        }
        return (
            <React.Fragment>
                <Chart
                    width={'100%'}
                    height={350}
                    chartType="CandlestickChart"
                    loader={<CircularProgress/>}
                    data={
                        this.setjson()
                    }
                    options={{
                        legend: 'none',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
            </React.Fragment>    
        )
    }
}

export default CandleChart

