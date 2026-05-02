import { nanoid } from "nanoid"

const MainFunction=(longUrl)=>{
    const shortUrl = nanoid(8);
    return { shortUrl, longUrl };
}

export default MainFunction;