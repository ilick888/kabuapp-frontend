import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import _ from 'lodash';
import { CircularProgress, Grid } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
  },
  fixedChartHeight: {
    height: 400
  },
  fixedLabelHeight: {
    height: 50
  },
});



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
      const { classes } = this.props;

        if(this.state.loading){
            return null
        }
        return (
            <React.Fragment>
              <Grid Container spacing={3} direction="column">
                <Grid item >
                  <Paper className={clsx(classes.paper, classes.fixedChartHeight)}>
                <Chart
                    width={'100%'}
                    height={'100%'}
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
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={clsx(classes.paper, classes.fixedLabelHeight)}>
                        表示期間
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
                    </Paper>
                  </Grid>
                </Grid>
            </React.Fragment>    
        )
    }
}
const mapStateToProps = state => ({ stock_prices : state.stock_price })

export default  connect(mapStateToProps, null)(withStyles(useStyles)(CandleChart))

