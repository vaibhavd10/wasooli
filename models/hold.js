import { Timestamp } from "mongodb"
import mongoose from "mongoose"

// Defining Schema
const holdSchema = new mongoose.Schema({
  
  borrowername:{type:String, required:true, trim:true},
  borroweremail:{type:String, required:true, trim:true},
  borrowerno:{type:String, required:true, trim:true},
  tenure:{type:Number,required:true,trim:true},
  amount:{type:Number,required:true,trim:true},
  interest:{type:Number,required:true,trim:true},
  si:{type:Number,required:true,trim:true},
  mi:{type:Number,required:true,trim:true},
  resultt:{type:Number,required:true,trim:true},
  date:{type:String,required:true,trim:true},
  duedate:{type:String,required:true,trim:true}










})

// Model 
const HoldModel = mongoose.model("bold", holdSchema)

export default HoldModel