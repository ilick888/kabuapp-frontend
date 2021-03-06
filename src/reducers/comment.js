import { READ_COMMENT,CREATE_COMMENT } from "../actions/action_comment";

export default (comments = [], action) => {
    switch(action.type){
        case READ_COMMENT:
            return action.response.data
        case CREATE_COMMENT:
            return [action.response.data, ...comments]
        default:
            return comments
    }
}