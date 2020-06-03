import { READ_COMMENT } from "../actions/action_comment";

export default (comments = {}, action) => {
    switch(action.type){
        case READ_COMMENT:
            return action.response.data
        default:
            return comments
    }
}