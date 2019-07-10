import axios from 'axios';
import { GET_LOGIN, GET_LOGIN_FULFILLED, GET_LOGIN_REJECTED } from "../constants";

//Define your action create that set your loading state.
export const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_LOGIN,
        payload: bool,
    };
}

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilled = (data) => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_LOGIN_FULFILLED,
        payload: data,
        loading: false,
    };
}


//Define a action creator that catches a error and sets an errorMessage
export const fetchDataRejected = (error) => {
    console.log("ERROR++",error);
    //Return a action type and a payload with a error
    return {
        type: GET_LOGIN_REJECTED,
        payload: error,
        loading: false,
    };
}

export const getLogin = (data) => {
    console.log("api call", data)

    let strParam = "action=login&mobile="+data.mobile+"&password="+data.password
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then get the data.
        return axios.post("http://jeetudyog.com/swiggy/api/service.php", strParam).then(res => {
            console.log("res===*******",res)
            //Set the results to the login array.
            dispatch(fetchDataFulfilled(res.data));
            //Error handle the promise and set your errorMessage
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}