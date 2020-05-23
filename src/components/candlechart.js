import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import _ from 'lodash';
import { CircularProgress } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



class CandleChart extends Component{

    constructor(props){
        super(props)
        this.state = {
            loading :true,
            slice: 270
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
        var datas = data.slice(this.state.slice,300)
        datas.unshift(['day', 'a', 'b', 'c', 'd'])
        return datas
    }

    handleChangeSlice = (event) => {
        this.setState({
            slice: event.target.value
        });
    };

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
                        animation: {
                            duration: 500,
                            easing: 'out',
                            startup: true,
                          },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                <Card>
                    <CardContent>
                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                            表示期間
                        </InputLabel>
                        <NativeSelect
                        value={this.state.slice}
                        onChange={(e) => this.handleChangeSlice(e)}
                        >
                        <option value={0}>300日</option>
                        <option value={100}>200日</option>
                        <option value={200}>100日</option>
                        <option value={270}>30日</option>
                        <option value={293}>7日</option>
                        </NativeSelect>
                    </CardContent>
                </Card>
            </React.Fragment>    
        )
    }
}

export default CandleChart

