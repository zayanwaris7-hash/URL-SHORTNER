import express from "express";
import routes from "./Routes/router.js";
import cors from "cors";
 
const PORT=process.env.PORT || 3000;
const app = express();
app.use(cors({
  origin: 'http://localhost:5173' 
}));
app.use(express.json());
app.use(routes);
app.use("/api", routes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});