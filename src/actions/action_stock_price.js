import axios from 'axios';
import { root_url } from './url'

export const READ_STOCK_PRICE = 'READ_STOCK_PRICE'


export const readStockPrice = id => async (dispatch) => {
    const response = await axios.get(`${root_url}/${id}`)
    dispatch({ type: READ_STOCK_PRICE, response})
}