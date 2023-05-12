const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const userSchema = new Schema ({
    UserName: {type:String, required:true},
    Email: {type:String, required:true}
})

const User = model("Users", userSchema);

module.exports = User;