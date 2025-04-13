import '../models/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';

import categorySchemaModel from '../models/category.model.js';

export const save =async(req,res)=>{
    var categoryList=await categorySchemaModel.find();
  //  console.log(userList);
     var len=categoryList.length;
     //console.log(len);
   var _id=(len==0)?1:categoryList[len-1]._id+1;
   //console.log(_id);
   var categoryDetail = req.body;
     //console.log(userDetail);
     categoryDetail={...categoryDetail,"_id":_id};
 //    console.log(userDetail);
   try{
     var user= await categorySchemaModel.create(categoryDetail);
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
  var user=await categorySchemaModel.findOne(condition_obj);
  if(user)
  {
      res.status(200).json(user);
  }
  else
  {
      res.status(404).json({"msg":"resource not found"});
  }
}

export const deleteCategory=async(req,res)=>{
  var users= await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));

  if(users)
  {
       var categoryDetail=await categorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj))
       
       if(categoryDetail)
       {
           res.status(200).json({"msg":"category deleted successfully"});
       } 
       else
       {
           res.status(500).json({"msg":"category not dleted successfully"});
       }
  } 
  else
  {
     res.status(404).json({"msg":"resource not found"});
  }
}