const fs=require('fs');
const http=require('http');
const server=http.createServer();
server.on("request",(req,res)=>{
	const rstream=fs.createReadStream("notes.txt");
	rstream.on("data",(chunk)=>{
		res.write(chunk);
	});
	rstream.on("end",()=>{
		res.end();
	});
	rstream.on("error",(err)=>{
		console.log("error");
		res.end("file not found");
	})
})
server.listen(3000);