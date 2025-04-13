import '../models/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import sendMail from './email.controller.js';

import userSchemaModel from '../models/user.model.js';

export const save =async(req,res)=>{
  console.log("its working");
   var userList=await userSchemaModel.find();
 //\\  console.log(userList);
    var len=userList.length;
    console.log(len);
  var _id=(len==0)?1:userList[len-1]._id+1;
  //console.log(_id);
  var userDetail = req.body;
    //console.log(userDetail);
    userDetail={...userDetail,"_id":_id,"role":"user","status":0,"info":Date()};
//    console.log(userDetail);


  try{
    var user= await userSchemaModel.create(userDetail);
    sendMail(user.email,user.password);
    //console.log(user);
    res.status(201).json({"status":true});
  }
  catch(err)
  {
    //console.log(err);
    res.status(500).json({"status":false});
  }

}

export const fetch=async(req,res)=>{
        var condition_obj=url.parse(req.url,true).query;
        //console.log(condition_obj);
        var user=await userSchemaModel.find(condition_obj);
        if(user.length!=0)
        {
            res.status(200).json(user);
        }
        else
        {
            res.status(404).json({"msg":"resource not found"});
        }
    }

    export const update=async(req,res)=>{
       var users= await userSchemaModel.findOne(JSON.parse(req.body.condition_obj));

       if(users)
       {
            var userDetail=await userSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:(JSON.parse(req.body.content_obj))})
            
            if(userDetail)
            {
                res.status(200).json({"msg":"user updated successfully"});
            } 
            else
            {
                res.status(500).json({"msg":"user not updated successfully"});
            }
       } 
       else
       {
          res.status(404).json({"msg":"resource not found"});
       }
     }
     export const deleteUser=async(req,res)=>{
        var users= await userSchemaModel.findOne(JSON.parse(req.body.condition_obj));
 
        if(users)
        {
             var userDetail=await userSchemaModel.deleteOne(JSON.parse(req.body.condition_obj))
             
             if(userDetail)
             {
                 res.status(200).json({"msg":"user deleted successfully"});
             } 
             else
             {
                 res.status(500).json({"msg":"user not dleted successfully"});
             }
        } 
        else
        {
           res.status(404).json({"msg":"resource not found"});
        }
      }

      export const login=async(req,res)=>{
        console.log("its working")
       var userDetail={...req.body,"status":1};
       //console.log(userDetail);
        var user=await userSchemaModel.find(userDetail);
       // console.log(user);
       if(user.length!=0)
       {
            const payload ={"subject":user[0].email};
            const key=rs.generate();
           const token=jwt.sign(payload,key);
           res.status(200).json({"token":token,"userList":user[0]});
       }
       else{
        res.status(500).json({"error":"login unsccessfull"})
       }
      };
    