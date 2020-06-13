import axios from 'axios';
import { root_url } from './url'

export const READ_COMMENT = 'READ_COMMENT'
export const CREATE_COMMENT = 'CREATE_COMMENT'


export const readCommentByStock = id => async (dispatch) => {
    const response = await axios.get(`${root_url}/comment/s/${id}`)
    dispatch({ type: READ_COMMENT, response})
}
export const createComment = values => async (dispatch) => {
    const response = await axios.post(`${root_url}/comment/`,values)
    dispatch({ type: CREATE_COMMENT, response})
}