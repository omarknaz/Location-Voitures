import {GET_RESERVATION, POST_RESERVATION , GET_ALL_RESERVATION} from '../../types';

const initialState = {
    reservation : null,
    reservations: [],
    all_reservations: []
}
export default function loginReducer(state = initialState, action) {

    switch (action.type) {
        case POST_RESERVATION:
            return {
                ...state,
                reservation: action.payload
            }
        case GET_RESERVATION:
            return {
                ...state,
                reservations: action.payload
            }
        case GET_ALL_RESERVATION:
            return {
                ...state,
                all_reservations: action.payload
            }
        default: return state
    }
}