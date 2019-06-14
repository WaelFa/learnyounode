var fs = require('fs')
const path = require('path')

module.exports.result = (dirc, ext) => {
    fs.readdir(process.argv[2], (err, data) => {
        if (err) throw err;
        else {
            data.filter(el => (path.extname(el).toString() === '.' + process.argv[3])).forEach(el => console.log(el))
        }
    })
}