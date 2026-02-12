
const express = require("express")
const dotenv =require("dotenv")
const path = require("path")
const cors = require("cors")

dotenv.config({path : path.join(__dirname,"./dotenv/config.env")})
const synonymsrouter = require("./router/Synanymsrouter")
const antonymsrouter = require("./router/Antonymsrouter")
const aptituderouter = require("./router/Aptituderouter")
const codingrouter = require("./router/Codingrouter")
const gamerouter = require("./router/Gamerouter")
const historyrouter = require("./router/Historyrouter") 
const gkrouter = require("./router/Gkrouter")
const connectionn = require("./Connectiondatabase")

connectionn()


const app = express()
app.use(cors())
app.use(express.json())

app.use(synonymsrouter)
app.use(antonymsrouter)
app.use(aptituderouter)
app.use(codingrouter)
app.use(gamerouter)
app.use(historyrouter)
app.use(gkrouter)


app.listen(process.env.PORTNO , ()=>
{
    console.log("your port number is "+process.env.PORTNO);
})