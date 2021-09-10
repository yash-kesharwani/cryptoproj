//functions to fetch CSV data, aggregate it and return portfolio value
//input= time till portfolio needs to be fetched
//token ??
//return map <coin, value>

const fs = require('fs'); 
const csv = require('csv-parser');

async function getCsvData(time) { 
    const val = new Map();
    const inputFilePath = "./resources/sample.csv"
    
    const chk = new Promise((resolve,reject)=>{

        fs.createReadStream(inputFilePath)
        .pipe(csv())
        .on('data', function(data){
            try {
                if(Number(data.timestamp) <=time){
                    if(!val.get(data.token))
                        val.set(data.token, 0)

                    if(data.transaction_type == "DEPOSIT") {
                        val.set(data.token, Number(val.get(data.token)) + Number(data.amount));
                    }
                    else {
                        val.set(data.token, Number(val.get(data.token)) - Number(data.amount));
                    }
                }
            }
            catch(err) {
                console.log("error");
            }

        })
        .on("end", function(){
            resolve(val);
        });
    });
    return Promise.resolve(chk);
}    

module.exports = {
    getCsvData
}
