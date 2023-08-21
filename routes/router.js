import express from "express";
import userSchemaModel from "../model/userSchema.js"
var router = express.Router();


// read data
// http://localhost:8081/user/read
router.get("/read",async (req,res)=>{
    const data = await userSchemaModel.find({})
    res.json({success : true , data : data});

})

// Create data || Save data in mongoDB
//http://localhost:8081/user/save
/*
{
    name,
    email, 
    mobile, 
}
*/
router.post("/save",async(req,res)=>{
    const userDetails = new userSchemaModel(req.body);
    await userDetails.save();

    res.send({success : true , message : "Data save in MongoDB"})
})

// update the data 
//http://localhost:8081/user/update
/*
{
    id : "",
    name: "",
    email : "",
    mobile : ""
}
*/
router.patch("/update",async(req,res)=>{
    // console.log(req.body)
    const {id,...rest} = req.body
    console.log(id+" ok then ");
    // console.log(rest)
    const data = await userSchemaModel.updateOne({_id:id},rest)
    res.send({success : true , message : "Data update successfully",data : data})
})


// delete data
//http://localhost:8081/user/delete/idvalue
router.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id
    const data = await userSchemaModel.deleteOne({_id:id})
    res.send({success : true , message : "Data deleted success fully",data : data});
})


export default router;