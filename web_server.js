const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


app.use(express.static(path.join(__dirname,'./public')))

app.use('/employees',require("./api/employees"))

// app.get('^/$',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','index.html'))
// })

// app.get('/new_page(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','new_page.html'))
// })

// app.get('/old_page(.html)?',(req,res)=>{
//     res.redirect(301, 'new_page.html')
// })




// // chaining
// const one = (req,res,next)=>{
//     console.log("one executed");
//     next()
// }

// const two = (req,res,next)=>{
//     console.log("two executed");
//     next()
// }

// const three = (req,res)=>{
//     console.log("three executed");
//     res.send("hi makkale...chanining compleated")
// }

// app.get('/hi(.html)?',[one,two,three]);



// 404 error if unwanted req
app.get("/*",(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})
// listen port
app.listen(PORT,()=>console.log(`server is running on ${PORT}`));