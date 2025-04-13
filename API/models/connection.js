import mongoose from "mongoose";

const url = "mongodb://localhost:27017/mernbatchtrainging7apr";

mongoose.connect(url);

console.log("Database connected successfully");