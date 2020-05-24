import { combineReducers } from 'redux'
import stock_price from './stock_price'
import current_price from './current_price'

export default combineReducers({ stock_price, current_price })