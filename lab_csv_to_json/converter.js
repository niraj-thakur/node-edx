const fs = require("fs");
const path = require("path");
const endofline = require("os").EOL;

const writeToFile = function(data){
	fs.writeFile(path.join(__dirname, "customer-data.json"), data, (error)=>{
		if(error) return console.error(error);
		console.log("Success in writing json");
	});
};

fs.readFile(path.join(__dirname, "customer-data.csv"), {encoding:"utf-8"}, (error, data)=>{
	if(error) return console.error(error);
	
	let lines = data.split(endofline);
	let tempArr = [], headers , rowCells, tokkens;
	lines.forEach(function(line, idx){
		tokkens = line.split(",");
		if(tokkens.length <= 2){
			return;
		}
		if(idx === 0){
			//getting object variables
			headers = tokkens;
			return;
		}
		//forming object
		var obj = {};
		rowCells = tokkens;
		
		headers.forEach(function(header, idx){
			obj[header] = rowCells[idx];
		});
		
		tempArr.push(obj);
	});
	
	writeToFile(JSON.stringify(tempArr));
	//console.log(JSON.stringify(tempArr));
});
