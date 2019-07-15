function qq(){
    // Requiring fs module in which 
    // writeFile function is defined. 
    const fs = require('fs') 
    
    // Data which will write in a file. 
    let data = "Learning how to write in a file."
    
    // Write data in 'Output.txt' . 
    fs.writeFile('Output.txt', data, (err) => { 
        
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
}


function q(){
    var object = new ActiveXObject("Scripting.FileSystemObject");
    var file = object.CreateTextFile("./1.txt", false);
    file.WriteLine('Hello World');
    file.WriteLine('Hope is a thing with feathers, that perches on the soul.'); 
    file.Close();
}

function file() 
{ 
var ForAppending = 8; 
var TriStateFalse = 0; 
var fso = new ActiveXObject("Scripting.FileSystemObject"); 
var newFile = fso.OpenTextFile("./1.txt", 
ForWriting, true, TriStateFalse); 
} 