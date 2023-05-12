const User=  require("../model/User");

exports.getUsers = async(req, res)=>{
    try{
       const result= await User.find({})
       return res.status(200).send({msg:"getting Users success", response: result})
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"getting Users failed"})
    }
}
exports.postUser = async(req, res)=>{
    
    try{
        const query= req.body;
        console.log(req.body)
        if(!query.Email || !query.UserName){
            return res.status(200).send({msg:"please enter all fields"})
        }
        const mail= await User.findOne({Email:query.Email})
        if(mail){
            return res.status(400).send({msg:"User exists"})
        }
        else{
        const newUser= new User(query);
        await newUser.save()
        return res.status(200).send({msg:"adding user successfully", response:newUser})
        
        }
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"addding Users failed"})
    }
}

exports.updateUser = async(req, res)=>{
    
    try{
        const id= req.params.id;
        console.log(id);
        await User.findOneAndUpdate({_id:id},{$set:{...req.body}})
       
        return res.status(200).send({msg:"update user successfully"})
        
       
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"update Users failed"})
    }
}

exports.deleteUser = async(req, res)=>{
    
    try{
        const id= req.params.id;
        console.log(id);
        await User.findOneAndRemove({_id:id})
       
        return res.status(200).send({msg:"remove user successfully"})
        
       
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"remove Users failed"})
    }
}
