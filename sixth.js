const hs = require('./sixthModule')

hs(process.argv[2], process.argv[3], (err, data) => {
    if (err) throw err;
    else {
        data.forEach(el => console.log(el))     
    }
})