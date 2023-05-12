import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_LOAD } from "../constant/actionsTypes";



const initialState={
    users: [],
    loadUsers: false,
    user: {},
    errors: []
}

export const userReducer =(state=initialState, {type,payload})=>{
   switch (type) {
    case GET_USER_LOAD:
       return {...state , loadUsers:true}

    case GET_USER_SUCCESS:
        return {...state, loadUsers: false, users: payload}

    case GET_USER_FAIL:
           return {...state, loadUsers: false, errors: payload}
    default:
        return state;
   }


}