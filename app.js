const repo = require("./scripts/repo.js")
const price = require("./scripts/price.js")
const utils = require("./scripts/utils.js")
const yargs = require('yargs')

yargs.options({
    'token':{describe: 'token type', type: 'string', alias: 't'},
    'date': {describe: 'date in dd/mm/yyyy format', type: 'string', alias: 'd'}
})

async function getPortfolioAmt(time, token){
    var amt = new Map();
    var portfolio = new Map(); 
    var rate = new Map();
    const inputs = utils.processInputs(time, token);

    var type = '1';
    if(!isNaN(time)){
        type ="2";
    }
    
    amt= await repo.getCsvData(inputs[0])
   
    const tokenArray = Array.from(amt.keys())
    rate= await price.fetchPrice(tokenArray, type, inputs[0]);
    
    portfolio = utils.getPortfolio(amt, rate);
    
    if(inputs[1] !='' && tokenArray.indexOf(inputs[1])>-1){
        console.log(inputs[1]+" : "+portfolio.get(inputs[1]));
    }
    else {
        tokenArray.forEach(token =>{
            console.log(token+" : "+portfolio.get(token));
        });
    }

}

getPortfolioAmt(yargs.argv.date, yargs.argv.token);
