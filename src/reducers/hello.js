import { READ_HEllO } from "../actions";
import _ from 'lodash';

export default (events = {}, action) => {
    switch(action.type){
        case READ_HEllO:
            return action.response.data
        default:
            return events
    }
}