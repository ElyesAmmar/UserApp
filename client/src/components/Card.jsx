import React from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { deleteUser } from "../JS/actions/users";

const CardUsers = ({Email,UserName,Id})=>{
const dispatch=useDispatch()
 const delUser=(id)=>{
    dispatch(deleteUser(id))
 }
    return (
        
        <Card  style={{ width: '18rem',margin:'50px auto' }}>
        <ListGroup variant="flush">
        <ListGroup.Item>User Name : {UserName}</ListGroup.Item>
        <ListGroup.Item>Email : {Email}</ListGroup.Item>
        </ListGroup>
        <Button variant="danger" onClick={()=>delUser(Id)}>Delete</Button>
        </Card>
        
    )
}

export default CardUsers;
