import axios from 'axios';

export const READ_HEllO = 'READ_HELLO'

const ROOT_URL = "http://0.0.0.0:8000/api/"


export const readEvents = () => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}`)
    console.log(response)
    dispatch({ type: READ_HEllO, response})
}