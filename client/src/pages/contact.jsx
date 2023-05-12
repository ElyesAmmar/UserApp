import React from "react";
import UserMap from "../components/Users"; 
import AddUser from "../components/Modal";


const Contact = () =>{

    return(
     <div style={{margin:'50px auto'}} >
        
        <div style={{textAlign:'center'}}>
            <AddUser />
        </div>

           <UserMap />
        
           
        
     </div>
    )
}

export default Contact ;