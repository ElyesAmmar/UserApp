import React, {useEffect}from "react";
import CardUsers from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../JS/actions/users";
// import { userReducer } from "./JS/reducer/userReducer";

const UserMap = ()=>{

const dispatch = useDispatch()
const users = useSelector((state)=>state.userReducer.users)
const load = useSelector((state)=>state.userReducer.loadUsers)




useEffect(()=>{
  dispatch(getUsers())
},[])
console.log(users)
return (
    <>
    {load ? 
    (<h1>loading......</h1>) 
    : (
        users.map((el)=> <CardUsers key={el._id} Id={el._id} UserName={el.UserName} Email={el.Email} />)
    )
    }
    </>
  );
}

export default UserMap;