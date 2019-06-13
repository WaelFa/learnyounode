var fs = require('fs')

const content = fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;
    else 
        console.log(data.toString().split(/\n/g).length-1)
    
})