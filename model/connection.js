import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/crudoperation")
.then(()=>{
    console.log("Now Connected with DATABASE")
})
.catch((err)=>{
    console.log(err)
})