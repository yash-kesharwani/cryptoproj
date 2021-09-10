ABOUT:PROJECT TO FETCH CRYPTO PORTFOLIO BASED ON TRANSACTIONS IN CSV FILE.
AUTHOR: YASH KESHARWANI (yashk9719@gmail.com)
ENVIRONMENT: NODE.JS

INSTALLATION: npm install

PARAMETERS: 
    1. date : in mm/dd/yyyy format
    2. token : name of token

SYNTAX:
1. TO FETCH LATEST PORTFOLIO:
    node app.js
2. TO FETCH PORTFOLIO VALUE ON A GIVEN DATE:
    node app.js --date mm/dd/yyyy
3. TO FETCH LATEST PORTFOLIO BASED ON TOKEN:
    node app.js --token token_name
4. TO FETCH PORTFOLIO OF A TOKEN ON A GIVEN DATE:
    node app.js --date mm/dd/yyyy --token token_name
NOTE: 
1. Invalid date would default to latest portfolio value.
2. Invalid token would default to all tokens in portfolio.

Examples:
node app.js --date 02/15/2020 --token BTC
node app.js --date 02/15/2020
node app.js --token BTC
node app.js