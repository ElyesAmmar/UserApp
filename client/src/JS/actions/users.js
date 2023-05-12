import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_LOAD, ADD_USER_FAIL,ADD_USER_SUCCESS} from "../constant/actionsTypes";
import axios from "axios"


export const getUsers =()=> async (dispatch)=> {
    
    dispatch({type:GET_USER_LOAD})
    try {
        let result = await axios.get('/api/user/')
        
        dispatch({
            type: GET_USER_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_USER_FAIL,
            payload: error
        })
    }
}

export const AddUsers =(data)=> async (dispatch)=> {
    
    try {
        dispatch({
            type: ADD_USER_SUCCESS,
            payload: data
        })
        await axios.post('/api/user/user',data)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
        dispatch({
            type: ADD_USER_FAIL,
            payload: error
        })
    }
}


export const deleteUser =(id)=> async(dispatch)=>{

    try {
        console.log("id:", id)
        await axios.delete(`/api/user/delete/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }


}