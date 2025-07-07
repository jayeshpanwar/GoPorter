import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema=mongoose.Schema({
    _id :Number,
    name:{
        type:String,
        require:[true,'name is required'],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        require:[true,'email is required'],
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        require:[true,'passowrd is required'],
        
    },
    mobile:{
        type:String,
        require:[true,'mobile is required']
    },
    address:{
        type:String,
        require:[true,'mobile is required'],
        trim:true
    },
    city:{
        type:String,
        require:[true,'city is required'],
        trim:true
    },
    gender:{
        type:String,
        require:[true,'gender is required']
    },
   role:String,
   status:Number,
   info:String
});
//to apply unique validator
mongoose.plugin(mongooseUniqueValidator);

const userSchemaModel=mongoose.model('user_collection',userSchema);

export default userSchemaModel;