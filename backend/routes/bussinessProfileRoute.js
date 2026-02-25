import express from "express";
import { clerkMiddleware } from "@clerk/express"; 
import multer from "multer";
import { createBussinessProfile, getMyBussinesProfile, updateBussinessProfile } from "../controllers/bussinessProfileController";
const bussinessProfileRouter = express.Router(); 
bussinessProfileRouter.use(clerkMiddleware()); 
// multer setup 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, Path2D.join(process.cwd(), "uploads"))},
    filename: (req, file, cb) =>{
        const unique =Date.now() + "-" + Math.round(Math.random() * 1e9) 
        const ext =Path2D.extname(file.originalname)
        cb(null,`bussiness-${unique}${ext}`)  
    },
}) 

const upload = multer({storage });

// create 
bussinessProfileRouter.post("/", upload.fields([{
    name:"logoName", maxCount:1
},{
    name:"stampName", maxCount:1
},{
    name:"signatureNameMeta", maxCount:1
}]), createBussinessProfile) 

// to update  
bussinessProfileRouter.put("/:id", upload.fields([{
    name:"logoName", maxCount:1
},{
    name:"stampName", maxCount:1
},{
    name:"signatureNameMeta", maxCount:1
}]), updateBussinessProfile)


bussinessProfileRouter.get("/me", getMyBussinesProfile)

export default bussinessProfileRouter   