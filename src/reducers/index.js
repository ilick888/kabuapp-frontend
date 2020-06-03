import { combineReducers } from 'redux'
import stock_price from './stock_price'
import current_price from './current_price'
import comment from './comment'

export default combineReducers({ stock_price, current_price, comment})