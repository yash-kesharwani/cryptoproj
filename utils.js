const axios = require('axios');

function getTokensForUrl(tokens){
    // var arr = Array.from(tokens);
    var str = '';
    tokens.forEach(token => {
        str = str+','.concat(token)
    })
    str = str.substring(1);
    return str;
}
function getPortfolio(amt, rates){
    var portfolio = new Map();
    var arr = Array.from(amt.keys());
    const cur='USD'
    arr.forEach(token => {
        portfolio.set(token, calculate(amt.get(token), rates.get(token)));
        
    });
    //console.log(portfolio);
    return portfolio;
}

function calculate(amt, rate){
    return Number(amt)*Number(rate);
}
function processTime(time){
    if(isNaN(time)) 
        return Number(9999999999);
    else
        return Number(time);
}
function processRateObj(rateObj){
    var rates = new Map();
    const cur='USD';
    Object.keys(rateObj).forEach(token => {
        rates.set(token, rateObj[token][cur])
    });
    return rates;
}

async function callApi(url){
    const chk = new Promise((resolve,reject)=>{
        axios.get(url)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            console.log(error);
            reject(error)
          });
    });
    return await Promise.resolve(chk);
}
function processInputs(date, token){
    var inputs=[];
    if(validateInputDate(date)){
        inputs[0]= Date.parse(date);
    }
    else 
        inputs[0]=Date.now();
    if(token){
        inputs[1] = token;
    }
    else 
        inputs[1] = '';
    return inputs;
}

function validateInputDate(date){
    var flag =false;
    const dateReg=/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    if(date && date.match(dateReg)){
        flag = true;
    }
    return flag;
}

function printdata(portfolio, inputs, tokenStr){
    if(inputs[0] == '' && inputs[1] == ''){
        for(const key in portfolio){
            console.log(key+" : "+portfolio.get(key));
        }
    }
    else if(inputs[1] !='' && tokenStr.indexOf(inputs[1])>-1){
        console.log(inputs[1]+" : "+portfolio.get(inputs[1]));
    }
}
module.exports = {
    getTokensForUrl,
    getPortfolio,
    processTime,
    processRateObj,
    callApi,
    processInputs,
    printdata
}

//validateInput('31/02/2011','XRP');
//processInputs(null, null, ['BTC','ETH'])
