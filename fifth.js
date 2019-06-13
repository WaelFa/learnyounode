var fs = require('fs')
const path =require('path')

const result = fs.readdir(process.argv[2], (err, data) => {
    if (err) throw err;
    else {
        console.log(data.filter(el => path.extname(el).toString()==='.'+process.argv[3] ).forEach(el=> console.log(el)))
    }
})
 