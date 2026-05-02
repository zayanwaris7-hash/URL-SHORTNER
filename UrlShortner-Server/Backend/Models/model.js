import pool from "../db.js";
import sql from "mysql2";

const adddata=async (url,shortUrl)=>{

    const [result] = await pool.execute("INSERT INTO urls (original_url, short_url) VALUES (?, ?)", [url, shortUrl]);
    return result;
};

const deleteData=async (id)=>{
    const [result] = await pool.execute("DELETE FROM urls WHERE id = ?", [id]);
    return result;
}

const getAllData=async ()=>{
    const [result] = await pool.execute("SELECT * FROM urls");
    return result;
}

const findByShortUrl=async (shortUrl)=>{
    const [result] = await pool.execute("SELECT * FROM urls WHERE short_url = ?", [shortUrl]);
    return result;
}

const findByLongUrl=async (longUrl)=>{
    const [result] = await pool.execute("SELECT * FROM urls WHERE original_url = ?", [longUrl]);
    return result;
}

export {adddata,deleteData,getAllData,findByShortUrl,findByLongUrl};
 