const request = require('request');
const getAdsInfo = require('./responseHandler');

const url = 'https://www.avito.ru/ufa/kvartiry/prodam-ASgBAgICAUSSA8YQ?cd=1';

const start = async (url) => {

    await request({url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36'}}, (error, response) => {
        if (error) {
            throw error;
        } else {
            const result = getAdsInfo(response);
            console.log(result);
        }
    })
}

start(url);