const sum = function(tab){
    return tab.reduce((a,b)=>Number(a)+Number(b))
}
console.log(sum(process.argv.filter((el,id)=>id!=0 & id!=1)))