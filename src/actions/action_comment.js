import axios from 'axios';

export const READ_COMMENT = 'READ_COMMENT'
export const CREATE_COMMENT = 'CREATE_COMMENT'

const ROOT_URL = "http://0.0.0.0:8000/comment"


export const readCommentByStock = id => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}/s/${id}`)
    dispatch({ type: READ_COMMENT, response})
}
export const createComment = values => async (dispatch) => {
    const response = await axios.post(`${ROOT_URL}/`,values)
    dispatch({ type: CREATE_COMMENT, response})
}