const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.avito.ru/ufa/kvartiry/prodam-ASgBAgICAUSSA8YQ?cd=1';

const getAdsIfo = (res) => {
    let urls = [];
    let titles = [];
    let prices = [];
    let addresses = [];
    let $ = cheerio.load(res.body);
    //Заголовок и ссылка на конкретное объявление
    $('.link-link-39EVK').each((i, elem) => {
        const url = $(elem).attr('href');
        const title = $(elem).text();

        urls.push(url);
        titles.push(title);
    })
    //Стоимость квартиры
    $('.price-text-1HrJ_').each((i, elem) => {
        const price = $(elem).text();

        prices.push({
            price
        })
    })
    //Адрес
    $('.geo-address-9QndR').each((i, elem) => {
        const address = $(elem).text();

        addresses.push({
            address
        })
    })

    urls = urls.slice(6, urls.length);
    titles = titles.slice(6, titles.length);
    console.log(urls.length)
    console.log(titles.length);
    console.log(prices.length);
    console.log(addresses.length);
}

const getPage = async (url) => {
    await request({url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36'}}, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            getAdsIfo(response);

        }
    })
}

getPage(url);