import { ADD_USER_SUCCESS, ADD_USER_FAIL } from "../constant/actionsTypes";



const initialState={
    newuser: {},
    errors: []
}

export const addReducer =(state=initialState, {type,payload})=>{
   switch (type) {

    case ADD_USER_SUCCESS:
        return {...state, loadUsers: false, newuser: payload}

    case ADD_USER_FAIL:
           return {...state, loadUsers: false, errors: payload}
    default:
        return state;
   }


}