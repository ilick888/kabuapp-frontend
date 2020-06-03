import axios from 'axios';

export const READ_COMMENT = 'READ_COMMENT'

const ROOT_URL = "http://0.0.0.0:8000/comment/s/"


export const readCommentByStock = id => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}${id}`)
    dispatch({ type: READ_COMMENT, response})
}