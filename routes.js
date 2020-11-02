const fs = require("fs");
function reqhandler(req,res) {
    const url = req.url;
    if(url==="/"){
        res.setHeader("content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>First page</title></head>");
        res.write("<body><form action = '/msg' method = 'POST'><input type = 'text' name = 'msg'></input><button type = 'submit' name = 'send'></button></form></body>");
        res.write("</html>")
        return res.end(); //we cannot write any thing after this place
        }
        if(url === "/msg" && req.method==="POST")
        {
            const body = [];
            req.on("data",(chuncks)=>{
                body.push(chuncks);
                console.log(body);
            });
            req.on('end',()=>{
                             const parsedata = Buffer.concat(body).toString();
                             const msg = parsedata.split("=")[1];
                             fs.writeFileSync("message.txt",msg);
                         });
                         res.statusCode = 302;
                        res.setHeader("Location","/");
                         return res.end();
            
        }
}

module.exports = reqhandler;