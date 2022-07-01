import {ADD_CAR_DIS_LOAD,ADD_CAR_EN_LAOD,ADD_CAR_FAILED,ADD_CAR_SUCCESS} from '../../types';

const initialState = {
    car : null,
    loader: false,
    isOpen: false,
    cars: []
}
export default function loginReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_CAR_DIS_LOAD:
            return {
                ...state,
                loader: false
            }
        case ADD_CAR_EN_LAOD:
            return {
                ...state,
                loader: true
            }
        case ADD_CAR_SUCCESS:
            return {
                ...state,
                car: action.payload,
            }
        
        default: return state
    }
}