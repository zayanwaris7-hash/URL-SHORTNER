import * as model from "../Models/model.js";
import MainFunction from "../MainFunction.js";

const handlegetshorturl=async(req,res)=>{
    try {
        const longurl= req.body.urls;
        const results=await model.findByLongUrl(longurl);
        if(results.length>0){
            return res.status(200).json({shortUrl:results[0].short_url});
        }
        const s=MainFunction(longurl);
        const shorturl=s.shortUrl;
        const result=await model.adddata(longurl,shorturl);
        if(result.length!==0){
            res.status(200).json({shortUrl:shorturl});
        }else{
            res.status(500).json({err:"server issue"});
        }
    } catch(error){
        res.status(500).send(error.message);
    }
} 

const handleredirect=async(req,res)=>{
    try {
        const shortUrl=req.params.shortUrl;
        const result=await model.findByShortUrl(shortUrl);
        if(result.length>0){
            res.redirect(result [0].original_url);   
        }else{
            res.status(404).json({err:"URL not found"});
        }
    } catch(error){
        res.status(500).send(error.message);
    }
}

export {handlegetshorturl,handleredirect};