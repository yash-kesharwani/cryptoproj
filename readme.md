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
    
PROJECT STRUCTURE:
    1. app.js : primary entrypoint to accept params and call other scripts for execution.
    2. resources : directory containing sample.csv file, used as a transactional data source.
    3. scripts : directory to store other dependent scripts:
        a. utils.js: provides basic utility functions to other scripts.
        b. price.js: to fetch crypto rates by calling APIs, returns Map of tokens and respective rates based on date.
        c. repo.js: to work with CSV file and aggregate data, returns Map of tokens and respective quantity upto a given date.
        
EXTERNAL DEPENDENCIES:
    1. yargs
    2. fs
    3. csv-parser
    4. axios
