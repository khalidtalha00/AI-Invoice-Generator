import mongoose, { Schema } from "mongoose";
import { trim } from "validator";
const bussinessProfileSchema =new mongoose.Schema({
    onwer:{type:String, required:true, index:true},
    email:{type:String, required:false,trim:true,lowercase:true, default:""},
    phone:{type:String, required:false, default:""},
    gst:{type:String, required:false,default:""},

    // for images
    logoUrl:{type:String,required:false,default:null},
    stampUrl:{type:String,required:false,default:null},
    signatureUrl:{type:String,required:false,default:null},

    signatureOwnerName:{type:String,required:false,default:""},
    signatureOwnerTitle:{type:String,required:false,default:""},
    defaultTaxPercent:{type:String,required:false,default:18}
},{
    timestamps:true
})

const BussinessProfile=mongoose.models.BussinessProfile || mongoose.model("BussinessProfile")
export default BussinessProfile