import { READ_STOCK_PRICE } from "../actions/action_stock_price";

export default (stock_price = {}, action) => {
    switch(action.type){
        case READ_STOCK_PRICE:
            return action.response.data
        default:
            return stock_price
    }
}