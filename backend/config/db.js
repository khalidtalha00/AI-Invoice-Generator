import mongoose  from "mongoose";

export const connectDB=async () => {
    await mongoose.connect('mongodb+srv://khalidtalha00_db_user:yn6Mc7ZWwMWxcjhq@cluster0.rzp0yd5.mongodb.net/InvoiceAI').then(()=>{console.log('DB Connected')})
    
}