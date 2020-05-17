import { READ_HEllO } from "../actions";
import _ from 'lodash';

export default (events = {}, action) => {
    console.log(action)
    switch(action.type){
        case READ_HEllO:
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}