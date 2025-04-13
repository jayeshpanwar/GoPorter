import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const categorySchema = mongoose.Schema({
    catnm:{
        type: String,
        require:[true,"catnm is required"],
        trim:true,
        lowercase:true
    },
    caticonnm:{
        type: String,
        require:[true,"caticonnm is required"],
        trim:true,
        lowercase:true
    },
    _id : Number
})
mongoose.plugin(mongooseUniqueValidator);

const categorySchemaModel = mongoose.model("category_collection",categorySchema);

export default categorySchemaModel;