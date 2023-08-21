import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({

    email : {
        type : String,
        required : [true, "email is require"],
        lowercase : true,
        unique : true,
        trim : true
    }, 
    name : {
        type : String,
        required : [true, "Name is require"],
        lowercase : true,
        trim : true
    },
    mobile : {
        type : String,
        required : [true, "Mobile is require"],
        minlenth : 10,
        maxlength : 10,
        trim : true
    }
},{
    timestemps : true 
})

userSchema.plugin(UniqueValidator);

const userSchemaModel = mongoose.model("user_collection",userSchema);

export default userSchemaModel;