import axios from 'axios';

export const READ_CURRENT_PRICE = 'READ_CURRENT_PRICE'

const ROOT_URL = "http://0.0.0.0:8000/current/"


export const readCurrentPrice = id => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}${id}`)
    dispatch({ type: READ_CURRENT_PRICE, response})
}