import { READ_CURRENT_PRICE } from "../actions/action_current_price";

export default (current_price = {}, action) => {
    switch(action.type){
        case READ_CURRENT_PRICE:
            return action.response.data
        default:
            return current_price
    }
}