//to read content 1 version
/* const fs = require('fs');
var path = "task2.json"
const readFileAsync = fs.readFileSync(path, 'utf8');
console.log(readFileAsync); */
//--------------------------------------------------------
//to read content 2 version
let fs = require('fs');
fs.readFile('task2.json', 'utf8', function(error, fileContent) {
    if (error) throw error;
    console.log(fileContent);
    //to write changes
    let toWrite = fileContent + "\n" + 'This file has some changes in comparison with task2.json';
    fs.writeFile('task2_changes.json', toWrite, function(error) {
        if (error) throw error;
        console.log('New data is in the file');
    });
});