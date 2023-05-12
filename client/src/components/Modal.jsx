import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';
import { AddUsers } from '../JS/actions/users';
import { useDispatch,useSelector } from "react-redux";
// import { getUsers } from "../JS/actions/users";



function AddUser() {
  const [show, setShow] = useState(false);

  const handleClose = () =>  setShow(false) ;
  const handleShow = () => setShow(true);

  const[Email, setEmail] = useState('')
  const[UserName, setUserName] = useState('')
  const newUser=useSelector((state)=>state.addReducer.newuser)
  const dispatch = useDispatch()
 
  const add=()=>{ 
    const data = {Email,UserName}
    console.log(data)
    dispatch(AddUsers(data)) 

    // try {
    //    await axios.post('/api/user/user',newUser)
    // } catch (error) {
    //  console.log(error)
    // }

    // dispatch(getUsers())
  }

  

  // const addToDB= async ()=>{
  //   try {
  //     await axios.post('/api/user/user',newUser)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>

        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Password" onChange={(e)=>setUserName(e.target.value)} />
          </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
         </Form.Group>
         
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{add();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser;