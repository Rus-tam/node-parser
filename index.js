

const start = async () => {
    try {
        const ads = await parser('https://www.avito.ru/ufa/kvartiry/prodam-ASgBAgICAUSSA8YQ?cd=1');
        console.log(ads);
    } catch (e) {
        console.log(e)
    }

    process.exit(0);
}

start();