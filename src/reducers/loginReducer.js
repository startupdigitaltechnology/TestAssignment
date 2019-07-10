import { GET_LOGIN, GET_LOGIN_FULFILLED, GET_LOGIN_REJECTED } from "../constants";
//Define your initialState
const initialState = {
    //Have a data array responsible for getting the data and setting to the array.
    data: [],
    //Have the loading state indicate if it's done getting data.
    loading: true,
    //Have state for error message for recieving an error.
    errorMessage: '',
}
 
//Define your reducer that will return the initialState by default
const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGIN: 
        return {...state, loading: action.payload};
        case GET_LOGIN_FULFILLED:
        return {...state, data: action.payload, loading: action.loading};
        case GET_LOGIN_REJECTED:
        return {...state, errorMessage: action.payload, loading: action.loading};
        default: 
        return state;
    }
}


export default loginReducer;