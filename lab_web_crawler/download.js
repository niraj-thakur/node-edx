const uuid = require("uuid/v1");
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const url = process.argv[2];

if(url){
	if(url.indexOf('https') > -1){
		httpsGet();
	}else{
		httpGet();
	}
}else{
	console.error("Provide valid url");
}

function httpGet(){
	console.log("From http");
	downLoad(http);
}

function httpsGet(){
	console.log("From https");
	downLoad(https);
}
//To download the data from website url.
function downLoad(method){
	if(method && method.get){
		method.get(url, (response)=>{
			let buff = '';
			
			response.on("data",(chunck)=>{
				buff += chunck;
			});
			
			response.on("end",()=>{
				saveToFile(buff);
				//console.log(buff);
			})
			
		}).on("error",(error)=>{
			console.error(`Error in get ${error.message}`);
		});
	}
}

//To save data in file
function saveToFile(data){
	
	let uid = uuid();
	
	//making uuid folder
	fs.mkdir(path.join(__dirname, uid), function(error){
		if(error && error.code !== "EEXIST") return console.error(error);
		
		//If success then 
		//saving the data
		
		fs.writeFile(path.join(__dirname, uid, "file.html"), data, (error)=>{
			if(error) return console.error(error);
			console.log("Success in writing file");
		});
		
		fs.writeFile(path.join(__dirname, url, "url.txt"), data, (error)=>{
			if(error) return console.error(error);
			console.log("Success in writing file");
		});
	});
	
	
}
//Testing fs
/*
fs.readFile(path.join(__dirname, "abc.text"), {encoding:'utf-8'}, (error, data)=>{
	if(error){
		return console.error(error);
	}
	readData = data;
	console.log(data);
});

//Making folder
fs.mkdir(path.join(__dirname, uuid()), function(error){
	if(error && error.code !== 'EEXIST') return console.error(error);
});

fs.writeFile(path.join(__dirname, "abc1.text"),"Hello world", function(error){
	console.error(error);
});
*/