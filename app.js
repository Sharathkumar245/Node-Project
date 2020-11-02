const fs = require('fs');
const http = require('http');
const routes = require("./routes");
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminrouter = require('./routes/admin');
const userrouter = require("./routes/user");
const { resolveSoa } = require('dns');
app.use(bodyParser.urlencoded({extended: false}));
app.use("/admin",adminrouter);
app.use("/user",userrouter);
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.get("/under20k",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","under20k.html"));
});
app.get("/10k",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","under10k.html"));
});
app.get("/under30k",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","under30k.html"));
});
app.get("/apple",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","apple.html"));
});
app.get("/dell",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","dell.html"));
});
app.get("/acer",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","acer.html"));
});
app.get("/aboutus",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","aboutweb.html"));
    
});
app.post("/action",(req,res,next)=>{


    const c = [];
    c.push(req.body.fname);
    c.push(req.body.lname);
    JSON.stringify(c);
    fs.appendFileSync("Feedback.txt",c);
    res.sendFile(path.join(__dirname,"views","success.html"));
});
app.get("/signup",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","signup.html"));
    
});
app.get("/admin",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","admin.html"));
    
});
app.post("/adminpage",(req,res,next)=>{
    const fa = [];
    fa.push(req.body.fname);
    if( fa == "Admin")
    {
    fs.readFile("Feedback.txt","utf8",function(error,data){
        
            res.send(data);
        
    });
}
else{
    res.sendFile(path.join(__dirname,"Views","sorry.html"));
}
});
app.get("/vivou10",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","vivo u10.html"));
});
app.get("/lenovok10",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","lenovo k10.html"));
});
app.get("/realmec3",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","realme c3.html"));
});
app.get("/honor20i",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","honor 20i.html"));
});
app.get("/redminote7s",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","redmi note 7s.html"));
});
app.get("/SamsungGalaxyM10",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Samsung Galaxy M10.html"));
});
app.get("/InfinixS5Pro",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Infinix S5 Pro.html"));
});
app.get("/Realme5",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Realme 5.html"));
});
app.get("/poocx2",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","pooc x2.html"));
});
app.get("/realmex2",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","realme x2.html"));
});
app.get("/realme6pro",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","realme 6 pro.html"));
});
app.get("/note9pro",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","note 9 pro.html"));
});
app.get("/galaxyj7",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","galaxy j7.html"));
});
app.get("/Zenfone",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Zenfone.html"));
});
app.get("/VivoZ1Pro",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Vivo Z1 Pro.html"));
});
app.get("/vivos1",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","vivo s1.html"));
});
app.get("/opporeno3",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","opporeno3.html"));
});
app.get("/realmex2pro",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","realme x2 pro.html"));
});
app.get("/Asus6Z",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Asus 6Z.html"));
});
app.get("/K20pro",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","K20 pro.html"));
});
app.get("/lenovoZ6pro",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","lenovo Z6 pro.html"));
});
app.get("/macbookpro15inch",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","macbook pro 15inch.html"));
});
app.get("/Applemacbookair13inch",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Apple macbook air 13inch.html"));
});
app.get("/applemacbookpro13inch",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","macbook pro 15inch.html"));
});
app.get("/pplemacbook12inch",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","pple macbook 12inch.html"));
});
app.get("/applemacbookairz",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","apple macbook air z.html"));
});
app.get("/DellAlienwareArea51M",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Dell Alienware Area 51M.html"));
});
app.get("/DellAlienwareArea51M",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Dell Alienware Area 51M.html"));
});
app.get("/DellInspiron137000",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Dell Inspiron 13 7000.html"));
});
app.get("/DellXPS15",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Dell XPS 15.html"));
});
app.get("/DellLatitude5300",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Dell Latitude 5300.html"));
});
app.get("/DellLatitude5500",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Dell Latitude 5500.html"));
});
app.get("/AcerSwift3",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Acer Swift 3.html"));
});
app.get("/AcerSwift5",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Acer Swift 5.html"));
});
app.get("/AcerAspireE15",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Acer Aspire E 15.html"));
});
app.get("/AcerSpin5",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Acer Spin 5.html"));
});
app.get("/AcerSwift7",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","Acer Swift 7.html"));
});

app.get("/login",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,"views","login.html"));
});
app.use((req,res,next)=>
{
//res.status(404).sendFile(path.join(__dirname,"Views","404.html"));
res.status(404).render("404");
});

// app.get("/addproducts",(req,res,next)=>
// {
//   res.send("<h1>Welcome to online store</h1><br><h1>Add Products details</h1><br><form action='/product' method = 'POST'><input type = 'text' name = 'product'></input><br></br><button type ='submit' value = 'submit' name = 'submit'>Send</button></form>");
// });
// app.post("/product",(req,res,next)=>{

//   console.log(req.body.product);
//   res.send("Product added");
// }
// );
const server = http.createServer(app);
server.listen(4500);
//    (req,res)=>{
//     //console.log(req.url,req.method);
//                       //req.url provides the url that you are entered
//     //process.exit(); // this is used to stop the process after one loop
//     const url = req.url;
//     if(url==="/"){
//     res.setHeader("content-type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>First page</title></head>");
//     res.write("<body><form action = '/msg' method = 'POST'><input type = 'text' name = 'msg'></input><button type = 'submit' name = 'send'></button></form></body>");
//     res.write("</html>")
//     res.end(); //we cannot write any thing after this place
//     }
//     if(url === "/msg" && req.method==="POST")
//     {
//         const body = [];
//         req.on("data",(chuncks)=>{
//             body.push(chuncks);
//             console.log(body);
//         });
//         req.on('end',()=>{
//             const parsedata = Buffer.concat(body).toString();
//             const msg = parsedata.split("=")[1];
//             fs.writeFileSync("message.txt",msg);
//         });
//         res.statusCode = 302;
//         res.setHeader("Location","/");
//         return res.end();
//     }
//});
//httpserver.listen(3000); //by default all the listeners have the value as 8080 but we can take the random
//values
//if we write the if else or the loops then we have to write the end like - return res.end();