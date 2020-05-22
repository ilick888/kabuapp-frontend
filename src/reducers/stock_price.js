import { READ_STOCK_PRICE } from "../actions";

export default (stock_price = {}, action) => {
    switch(action.type){
        case READ_STOCK_PRICE:
            return action.response.data
        default:
            return stock_price
    }
}