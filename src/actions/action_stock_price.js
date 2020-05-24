import axios from 'axios';

export const READ_STOCK_PRICE = 'READ_STOCK_PRICE'

const ROOT_URL = "http://0.0.0.0:8000/"


export const readStockPrice = id => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}${id}`)
    dispatch({ type: READ_STOCK_PRICE, response})
}