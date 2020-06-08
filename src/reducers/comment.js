import { READ_COMMENT,CREATE_COMMENT } from "../actions/action_comment";

export default (comments = {}, action) => {
    switch(action.type){
        case READ_COMMENT:
            return action.response.data
        case CREATE_COMMENT:
            const data = Object.entries({...comments}).map(([key, value]) => ({
                'id': value.id, 
                'comment': value.comment,
                'created_at' : value.created_at,
                'stock' : value.stock,
            }))
            data.unshift(action.response.data)
            return data
        default:
            return comments
    }
}