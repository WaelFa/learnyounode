var fs = require('fs')
const path = require('path')

module.exports=function (dirc, ext, callback){
    fs.readdir(dirc, (err, data) => {
        if (err) return callback(err);
        else {
            data = data.filter(el => (path.extname(el).toString() === '.' + ext))
            return callback(null, data)
        }
    })
}

