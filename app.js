const repo = require("./repo.js")

async function getPortfolioAmt(time, token){
    var amt = new Map();
    amt= await repo.getCsvData(1571967067, 'ETH')
    console.log("amount of "+token+": "+amt.get(token))
    return amt;
}
getPortfolioAmt(1571967067, "BTC")
