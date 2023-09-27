const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
//res.end('hello from the other side  bro');
//console.log(req.url)
  if(req.url=="/"){
    res.end( "you are at home");
 }
else if(req.url=="/about"){
    res.end( "you are at about");
}
else if (req.url=="/userapi"){

  fs.readFile("./http_server/api_concept/api1.json",'utf-8',(err,data)=>{
    res.end(data);
    console.log(err);
  })
  res.writeHead(200,{"Content_type":"application/json"});
// res.end(data);
}

else{
  res.writeHead(404,{"Content_type":"text/html"});
    res.end("404 error");
}
});

server.listen(8000,"127.0.0.1",()=>{

console.log("listening to the port no 8000 ");
})
//path: 'C:\\Users\\ranja\\OneDrive\\Desktop\\.vscode\\node_js\\jsonnodejs\\api_concept\\api1.json'
//path: 'C:\\Users\\ranja\\OneDrive\\Desktop\\.vscode\\node_js\\api_concept\\api1.json'