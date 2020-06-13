import axios from 'axios';
import { root_url } from './url'

export const READ_CURRENT_PRICE = 'READ_CURRENT_PRICE'


export const readCurrentPrice = id => async (dispatch) => {
    const response = await axios.get(`${root_url}/current/${id}`)
    dispatch({ type: READ_CURRENT_PRICE, response})
}