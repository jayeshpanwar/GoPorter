import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const enterprisesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    companyname: {
        type: String,
        required: [true, 'Company Name is required'],
    },
    mobile: {
        type: String,
        required: [true, 'Mobile is required']
    },
    role: {
        type: String,
        default: "enterprise"
    },
    status: {
        type: Number,
        default: 1
    },
    info: {
        type: String,
        default: ""
    }
});

enterprisesSchema.plugin(mongooseUniqueValidator);
const enterprisesSchemaModel = mongoose.model("enterprises_collection", enterprisesSchema);

export default enterprisesSchemaModel;
