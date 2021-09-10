//fetch price of coins

const utils = require("./utils.js")
async function fetchPrice(tokens, type, timestamp){
    var rates =new Map();
    //for latest rates 
    if(type == '1'){
        const tokenStr = utils.getTokensForUrl(tokens, type)
        var url =  'https://min-api.cryptocompare.com/data/pricemulti?fsyms='+tokenStr+'&tsyms=USD&api_key=1eb0c830883336ceb836ea59f08d0d5346ae2030972a7341d7ebe5c4bd2ec561'
        rates =utils.processRateObj(await utils.callApi(url));
        return rates;
    }
    //for timestamp based rates
    else if(type == '2'){
        for(const token of tokens) {
            var url = 'https://min-api.cryptocompare.com/data/pricehistorical?fsym='+token+'&tsyms=USD&ts='+timestamp+'&api_key=1eb0c830883336ceb836ea59f08d0d5346ae2030972a7341d7ebe5c4bd2ec561';
            var rate = await utils.callApi(url);
            rates.set(token, rate[token]['USD']);
        }
        return rates;
    }
    else {
        console.log("ERROR: invalid type");
    }
    
}

module.exports = {
    fetchPrice
}