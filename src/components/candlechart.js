import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from "react-google-charts";
import _ from 'lodash';


class CandleChart extends Component{

    setjson(){
        var data = []
        _.map(this.props.events, event => (
            data.unshift([event.date, event.low, event.open, event.close, event.high])
        ))
        var datas = data.slice(200,300)
        datas.unshift(['day', 'a', 'b', 'c', 'd'])
        return datas
    }

    render(){
        return (
            <React.Fragment>
                <Chart
                    width={'100%'}
                    height={350}
                    chartType="CandlestickChart"
                    loader={<div>Loading Chart</div>}
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

const mapStateToProps = state => ({ events : state.hello })

export default connect(mapStateToProps, null)(CandleChart)

