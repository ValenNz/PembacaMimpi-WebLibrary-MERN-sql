const express = require("express")
const cors = require("cors")   
const db = require("./config")                

const app = express()  
app.use(cors())                                    

const bookrouter = require("./router/book_router")
app.use("/book", bookrouter)


/* membuat web server dengan port 8000 */
app.listen(8000, () => {
    console.log("server run on port 8000")
})