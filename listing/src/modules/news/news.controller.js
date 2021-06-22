import got from 'got';
import {responseMerge} from '@src/helpers';
import cheerio from 'cheerio';
let $='';
import {
    CONSTANT
} from '@src/constant/main.constant';
class NewsController {

    async fetchNews() {
        const url = "https://www.hindustantimes.com"
        const data = await this.crawlWebsite(url);
        $ = cheerio.load(data);
        const news = await this.retreiveNews($);
        return responseMerge(CONSTANT.SUCCESS.LIST, {
            data: news
        });
    }

    async crawlWebsite(siteLink) {
        const html = await got.get(siteLink);
        return html.body;
    };

    async retreiveNews($) {
        try {
            const news = [];
            let index = 0;
            $('body').find('section .mainContainer').each((index, row) => {

                $(row).find('section .worldSection').each((i, detail) => {
                    if (true || i == 0) {
                        $(detail).find('.cartHolder').each((articleIndex, articleData) => {
                            if (true || articleIndex == 1) {
                                let imgReal = '';
                                $(articleData).find('figure span').each((imgI, imgR) => {
                                    imgReal = $(imgR).find('img').attr('src')
                                });

                                let object = {
                                    title: $(articleData).find('.hdg3').text().toString(),
                                    type: $(articleData).find('.catName').text(),
                                    link: 'https://www.hindustantimes.com/' + $(articleData).find('.hdg3 a').attr('href'),
                                    shortStory: $(articleData).find('.sortDec').text().toString(),
                                    date: $(articleData).find('.dateTime').text(),
                                    imageReal: imgReal,
                                    image: $(articleData).find('.lazy').attr('data-src'),
                                    dataSource: 'Hindustan Times',
                                    id: ++index

                                };
                                news.push(object);
                            }
                        });
                    }
                });

            });
            return news;
        } catch (error) {
            return Promise.reject();
        }
    }

}




const newController = new NewsController();

export default newController;