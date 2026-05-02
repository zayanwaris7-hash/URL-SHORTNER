import { handlegetshorturl,handleredirect } from "../Controller/control.js"; 
import express from "express";

const router=express.Router();

router.post("/getshorten",handlegetshorturl);
router.get("/:shortUrl",handleredirect);
export default router; 