require("dotenv").config();
const express = require("express")
const cors=require("cors")
const app = express()
const authrouter = require("./routes/authroutes")
const Contactrouter=require("./routes/Contact-routes")
const serviceRoute = require("./routes/service-router");
const adminroute=require("./routes/admin-routes")
const connectDb = require("./utils/db");
const errormiddleware = require("./middleware/Error-middleware");

const corsOptions={
 origin:"http://localhost:5173",
 methods:"GET,POST,PATCH,DELETE,PUT,HEAD",
 credentials:true
}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth", authrouter)
app.use("/api/form", Contactrouter)
app.use("/api/data", serviceRoute)
app.use(errormiddleware)
app.use("/api/admin",adminroute)
const port = 5000;
connectDb().then(() => {

    app.listen(port, () => {
        console.log("Server is running on port 5000")

    })
})